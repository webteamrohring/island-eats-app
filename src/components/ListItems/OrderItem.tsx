import React, {PropsWithoutRef, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Colors, Fonts} from '@styles';
import {OrderItemProps} from '@components/ListItems/interfaces';

import {SvgXml} from 'react-native-svg';
import UserTickIcon from '@icons/userTick.svg';
import BagIcon from '@icons/bag.svg';
import CreditCardIcon from '@icons/creditCard.svg';
import SimpleBtn from '@components/Buttons/SimpleBtn.tsx';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigation/Interfaces';
import {OrderStatus} from '@interfaces';

export default ({
  _id,
  orderId,
  status,
  customer,
  orderItems,
  card,
  total,
}: PropsWithoutRef<OrderItemProps>) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const [statusBgColor, setStatusBgColor] = useState(Colors.ltBlue);

  const [statusTextColor, setStatusTextColor] = useState(Colors.blue);

  useEffect(() => {
    switch (status) {
      case OrderStatus.ORDER_PLACED:
        setStatusBgColor(Colors.ltBlue);
        setStatusTextColor(Colors.blue);
        break;
      case OrderStatus.ITEM_PICKED:
      case OrderStatus.PREPARING:
        setStatusBgColor(Colors.ltYellow);
        setStatusTextColor(Colors.yellow);
        break;
      case OrderStatus.ON_DELIVERY:
        setStatusBgColor(Colors.ltRed);
        setStatusTextColor(Colors.red);
        break;
      case OrderStatus.DELIVERED:
        setStatusBgColor(Colors.ltGreen);
        setStatusTextColor(Colors.primary);
        break;
      default:
        setStatusBgColor(Colors.ltBlue);
        setStatusTextColor(Colors.blue);
        break;
    }
  }, [status]);
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        padding: 13,
        borderRadius: 9.3,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={[Fonts.subHeader2, {lineHeight: 22}]}>{orderId}</Text>
          <Text style={[Fonts.body4, {color: Colors.grayText}]}>Order ID</Text>
        </View>
        <View
          style={{
            backgroundColor: statusBgColor,
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 7.5,
          }}>
          <Text
            style={[
              Fonts.body5,
              {color: statusTextColor, textTransform: 'capitalize'},
            ]}>
            {status.split('_').join(' ')}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: Colors.border1,
          marginVertical: 10,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{gap: 15}}>
          <View style={{flexDirection: 'row', gap: 4}}>
            <SvgXml xml={UserTickIcon.toString()} width={13} height={13} />
            <Text
              style={[
                Fonts.body4,
                {color: Colors.grayText},
              ]}>{`${customer?.firstName} ${customer?.lastName}`}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 4}}>
            <SvgXml xml={BagIcon.toString()} width={13} height={13} />
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              {orderItems.length}
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 4}}>
            <SvgXml xml={CreditCardIcon.toString()} width={13} height={13} />
            <Text
              style={[
                Fonts.body4,
                {color: Colors.grayText, textTransform: 'capitalize'},
              ]}>
              {card && card.cardType
                ? card.cardType.split('_').join(' ')
                : 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{gap: 10}}>
          <View style={{gap: 4, alignItems: 'flex-end'}}>
            <Text style={[Fonts.subHeader2]}>
              ${total ? total?.toFixed(2) : 0}
            </Text>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              Total Amount
            </Text>
          </View>
          <SimpleBtn
            onPress={() => navigation.navigate('Order', {id: _id})}
            title="View Details"
            width={responsiveWidth(28.55)}
          />
        </View>
      </View>
    </View>
  );
};
