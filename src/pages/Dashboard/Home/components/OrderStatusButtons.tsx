import React, {PropsWithoutRef, useContext} from 'react';

import {View} from 'react-native';

import OrderStatusButton from '@pages/Dashboard/Home/components/OrderStatusButton.tsx';

import Animated from 'react-native-reanimated';
import {OrderStatusButtonsProps} from '@pages/Dashboard/Home/Interfaces';
import {centerContent, fullWidth} from '@styles/MainStyles.ts';
import {OrderStatus} from '@interfaces';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigation/Interfaces';
import OrderContext from '@contexts/OrderContext.tsx';

export default ({style}: PropsWithoutRef<OrderStatusButtonsProps>) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const {orderStats} = useContext(OrderContext);

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          width: fullWidth,
          gap: 7,
          zIndex: 1,
          ...centerContent,
        },
        style,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          gap: 7,
        }}>
        <OrderStatusButton
          onPress={() =>
            navigation.navigate('Orders', {
              orderStatus: OrderStatus.ORDER_PLACED,
            })
          }
          orderStatus={OrderStatus.ORDER_PLACED}
          count={orderStats.orderPlaced}
          text="New Orders"
        />
        <OrderStatusButton
          onPress={() =>
            navigation.navigate('Orders', {
              orderStatus: [OrderStatus.PREPARING, OrderStatus.ITEM_PICKED],
            })
          }
          orderStatus={OrderStatus.PREPARING}
          count={orderStats.preparing}
          text="Preparing Order"
        />
      </View>
      <View style={{flexDirection: 'row', gap: 7}}>
        <OrderStatusButton
          onPress={() =>
            navigation.navigate('Orders', {
              orderStatus: OrderStatus.ON_DELIVERY,
            })
          }
          orderStatus={OrderStatus.ON_DELIVERY}
          count={orderStats.onDelivery}
          text="On Delivery"
        />
        <OrderStatusButton
          onPress={() =>
            navigation.navigate('Orders', {
              orderStatus: OrderStatus.DELIVERED,
            })
          }
          orderStatus={OrderStatus.DELIVERED}
          count={orderStats.delivered}
          text="Delivered Order"
        />
      </View>
    </Animated.View>
  );
};
