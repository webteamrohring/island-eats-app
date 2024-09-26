import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Colors, Fonts} from '@styles';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {OrderStatus, OrderStatusDetailsProps} from '@interfaces';
import {circle} from '@styles/MainStyles.ts';

export default ({
  statusDetails,
  status,
}: PropsWithChildren<OrderStatusDetailsProps>) => {
  const [statusIndex, setStatusIndex] = useState(0);
  useEffect(() => {
    setStatusIndex(Object.keys(OrderStatus).findIndex(s => s === status));
  }, [status]);

  return (
    <View style={{flexDirection: 'row', gap: 8}}>
      <View style={{width: '10%', marginTop: responsiveHeight(0.5)}}>
        {Object.keys(statusDetails).map((s, s_index) => (
          <View
            key={`status-indicator-${s_index}`}
            style={{alignItems: 'center'}}>
            <View
              style={{
                ...circle(responsiveHeight(2.35)),
                backgroundColor:
                  statusIndex >= s_index ? Colors.primary : Colors.black2,
              }}
            />
            {s_index < Object.keys(statusDetails).length - 1 && (
              <View
                style={{
                  width: 2,
                  height: responsiveHeight(4.7),
                  backgroundColor:
                    statusIndex >= s_index ? Colors.primary : Colors.black2,
                }}
              />
            )}
          </View>
        ))}
      </View>
      <View style={{width: '90%', gap: responsiveHeight(3.55)}}>
        {Object.keys(statusDetails).map((s, s_index) => (
          <View key={`status-detail-${s_index}`}>
            <Text style={[Fonts.body7, {textTransform: 'capitalize'}]}>
              {Object.keys(OrderStatus)[s_index].split('_').join(' ')}
            </Text>
            <Text style={[Fonts.footnote4, {color: Colors.grayText8}]}>
              {statusIndex >= s_index
                ? statusDetails[s_index]?.toString()
                  ? statusDetails[s_index]?.toString()
                  : 'N/A'
                : 'Pending'}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
