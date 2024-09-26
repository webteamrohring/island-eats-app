import React, {useState} from 'react';
import {InteractionManager, Platform, View} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import OrderStatusButtons from '@pages/Dashboard/Home/components/OrderStatusButtons.tsx';
import {
  clamp,
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import MainLayout from '@layouts/MainLayout';

import HomeHeader from '@pages/Dashboard/Home/components/HomeHeader';
import DateHeader from '@pages/Dashboard/Home/components/DateHeader';
import OrderList from '@components/OrderList';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import {OrderStatus} from '@interfaces';

const SCROll_DELAY = 20;

export default () => {
  const [orderDate, setOrderDate] = useState(moment().format('YYYY-MM-DD'));
  const scrollY = useSharedValue(0);

  const headerHeight = responsiveHeight(22);

  const onScroll = useAnimatedScrollHandler<{prevY: number}>(
    {
      onScroll: (event, ctx) => {
        if (typeof ctx.prevY !== 'undefined') {
          const diff = event.contentOffset.y - ctx.prevY;

          scrollY.value =
            clamp(scrollY.value + diff, 0, headerHeight) - SCROll_DELAY;
        }
      },
      onBeginDrag: (event, ctx) => {
        ctx.prevY = event.contentOffset.y / 2;
      },
    },
    [],
  );

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        scrollY.value = 0;
      });

      return () => task.cancel();
    }, [scrollY]),
  );

  const orderStatusStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(
        scrollY.value,
        [0, 100],
        [1, 0],
        Extrapolation.CLAMP,
      ),
      height: interpolate(
        scrollY.value,
        [0, 150],
        [headerHeight, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 100],
            [0, -40],
            Extrapolation.CLAMP,
          ),
        },
      ],
    }),
    [headerHeight],
  );
  const onDateChange = (value: string) => {
    if (orderDate !== value) {
      setOrderDate(value);
    }
  };
  return (
    <MainLayout scrollable={false} contentContainerStyle={{paddingTop: 27}}>
      <HomeHeader />

      <DateHeader onChange={onDateChange} />

      <View
        style={{height: responsiveHeight(Platform.OS === 'ios' ? 70 : 78.5)}}>
        <OrderStatusButtons style={[orderStatusStyle]} />
        <OrderList
          onScroll={onScroll}
          keyPrefix="dashboard-orders"
          isAnimated
          date={orderDate}
          orderStatus={[
            OrderStatus.ORDER_PLACED,
            OrderStatus.PREPARING,
            OrderStatus.ITEM_PICKED,
            OrderStatus.ON_DELIVERY,
          ]}
          style={{
            paddingTop: headerHeight + 20,
          }}
        />
      </View>
    </MainLayout>
  );
};
