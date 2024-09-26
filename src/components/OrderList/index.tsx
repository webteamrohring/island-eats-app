import {View, FlatList, Text, RefreshControl} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import OrderItem from '@components/ListItems/OrderItem.tsx';
import React, {PropsWithoutRef, useContext, useEffect, useState} from 'react';
import {OrderStatus} from '@interfaces';

import OrderListHeader from '@components/OrderList/components/OrderListHeader';
import Animated from 'react-native-reanimated';
import {OrderListProps} from '@components/OrderList/interfaces';
import OrderContext from '@contexts/OrderContext.tsx';
import {OrderType} from '@components/ListItems/interfaces';
import {socket} from 'src/socket';
import {useFocusEffect} from '@react-navigation/native';
import AppContext from '@contexts/AppContext.tsx';

import OrderListFooter from '@components/OrderList/components/OrderListFooter.tsx';
import OrderListEmpty from '@components/OrderList/components/OrderListEmpty.tsx';
export default ({
  onScroll,
  keyPrefix = 'order',
  date,
  orderStatus = OrderStatus.ORDER_PLACED,
  search,
  isAnimated = false,
  style = {},
  expandable = true,
}: PropsWithoutRef<OrderListProps>) => {
  const {showAlert} = useContext(AppContext);

  const {getOrders, getOrderStats} = useContext(OrderContext);

  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<OrderType[]>([]);

  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [hasMorePages, setHasMorePages] = useState(false);

  const Container = isAnimated ? Animated.View : View;
  const ListContainer = isAnimated ? Animated.FlatList : FlatList;

  const orderCreatedListener = (args: any) => {
    const {order, title, body} = args;
    if (order) {
      setOrders(prev_orders => [order, ...prev_orders]);

      showAlert(title, body);
    }
  };

  const orderUpdatedListener = (args: any) => {
    const {order, title, body} = args;
    if (order) {
      setOrders(prev_orders =>
        prev_orders.map(o => {
          if (o._id === order._id) {
            o.status = order.status;
          }
          return o;
        }),
      );
      showAlert(title, body);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      socket.on('order:created', orderCreatedListener);

      socket.on('order:update', orderUpdatedListener);

      return () => {
        socket.off('order:created', orderCreatedListener);
        socket.off('order:update', orderUpdatedListener);
      };
    }, []),
  );

  const onGetOrders = async () => {
    if (typeof getOrders !== 'undefined') {
      setLoading(true);
      await getOrders(page, limit, date, orderStatus, search)
        .then((data: any) => {
          setLoading(false);

          setOrders(prev_orders => [...prev_orders, ...data.orders]);

          setHasMorePages(data.pageInfo.hasMorePages);
          setLoading(false);
        })
        .catch(async error => {
          const response = await error.response.json();
          console.log(response.error);
          setLoading(false);
          return [];
        });
    }
  };

  useEffect(() => {
    if (!loading) {
      onGetOrders().then(() => {});
    }
  }, [page, date, search]);

  useEffect(() => {
    setOrders([]);
    setPage(1);
  }, [date, search, orderStatus]);

  const onRefresh = async () => {
    if (!loading) {
      if (typeof getOrderStats !== 'undefined') {
        await getOrderStats();
      }
      setOrders([]);

      if (page === 1) {
        onGetOrders().then(() => {});
      } else {
        setPage(1);
      }
    }
  };

  const onEndReached = () => {
    if (!loading && hasMorePages) {
      setPage(page + 1);
    }
  };

  return (
    <Container>
      <ListContainer
        data={orders}
        extraData={orders}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={20}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={onRefresh}
            tintColor={'transparent'}
          />
        }
        style={[style]}
        onScroll={onScroll}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        keyExtractor={({_id}) => `${keyPrefix}-${_id}`}
        ListHeaderComponent={
          <OrderListHeader orderStatus={orderStatus} expandable={expandable} />
        }
        ListEmptyComponent={<OrderListEmpty loading={loading} />}
        contentContainerStyle={{
          gap: responsiveWidth(2.15),
          paddingBottom: responsiveHeight(30),
        }}
        renderItem={({item}) => (
          <OrderItem {...item} key={`${keyPrefix}-${item._id}`} />
        )}
        ListFooterComponent={<OrderListFooter loading={loading} />}
      />
    </Container>
  );
};
