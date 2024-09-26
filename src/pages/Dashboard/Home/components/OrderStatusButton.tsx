import React, {PropsWithoutRef, useEffect, useState} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '@styles';

import {OrderStatusButtonProps} from '@pages/Dashboard/Home/Interfaces';
import BagGreenIcon from '@icons/bagGreen.svg';
import BagTickIcon from '@icons/bagTick.svg';
import TruckPreparingIcon from '@icons/truckPreparing.svg';
import TruckDeliveryIcon from '@icons/truckDelivery.svg';
import TruckDeliveredIcon from '@icons/truckDelivered.svg';
import {OrderStatus} from '@interfaces';
import {SvgXml} from 'react-native-svg';
export default ({
  orderStatus,
  count,
  text,
  onPress,
  style,
}: PropsWithoutRef<OrderStatusButtonProps>) => {
  const [orderIcon, setOrderIcon] = useState(BagGreenIcon.toString());

  useEffect(() => {
    const status = Array.isArray(orderStatus) ? orderStatus[0] : orderStatus;
    switch (status) {
      case OrderStatus.ORDER_PLACED:
        setOrderIcon(BagTickIcon.toString());
        break;
      case OrderStatus.PREPARING:
        setOrderIcon(TruckPreparingIcon.toString());
        break;

      case OrderStatus.ON_DELIVERY:
        setOrderIcon(TruckDeliveryIcon.toString());
        break;
      case OrderStatus.DELIVERED:
        setOrderIcon(TruckDeliveredIcon.toString());
        break;
      default:
        setOrderIcon(BagGreenIcon.toString());
        break;
    }
  }, [orderStatus]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          flex: 1,
          backgroundColor: Colors.white,
          padding: 12,
          gap: 4,
          borderRadius: 5,
        },
        style,
      ]}>
      <SvgXml xml={orderIcon} width="22" height="22" />
      <View>
        <Text style={{...Fonts.body3}}>{count}</Text>
        <Text style={{...Fonts.caption}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
