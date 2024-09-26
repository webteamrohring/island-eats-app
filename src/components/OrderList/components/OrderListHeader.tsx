import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '@styles';
import {OrderStatus} from '@interfaces';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '@navigation/Interfaces';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default ({
  orderStatus = OrderStatus.ORDER_PLACED,
  expandable = true,
}: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}>
      <Text style={[Fonts.body7, {textTransform: 'capitalize'}]}>
        {orderStatus === OrderStatus.DELIVERED
          ? 'Delivered Order'
          : 'On Delivery'}
      </Text>
      {expandable && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Orders', {orderStatus})}>
          <Text style={[Fonts.body5, {color: Colors.primary}]}>Show All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
