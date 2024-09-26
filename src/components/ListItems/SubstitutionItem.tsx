import React, {PropsWithoutRef, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Colors, Fonts} from '@styles';
import {SubstitutionItemProps} from '@components/ListItems/interfaces';

import {SubstitutionStatus} from '@interfaces';
import FastImage from 'react-native-fast-image';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default ({
  _id,
  orderItem,
  substitute,
  status = SubstitutionStatus.PENDING,
}: PropsWithoutRef<SubstitutionItemProps>) => {
  const [statusBgColor, setStatusBgColor] = useState(Colors.ltBlue);

  const [statusTextColor, setStatusTextColor] = useState(Colors.blue);

  useEffect(() => {
    switch (status) {
      case SubstitutionStatus.PENDING:
        setStatusBgColor(Colors.ltGreen);
        setStatusTextColor(Colors.primary);
      case SubstitutionStatus.APPROVED:
        setStatusBgColor(Colors.ltBlue);
        setStatusTextColor(Colors.blue);
        break;
      case SubstitutionStatus.REJECTED:
        setStatusBgColor(Colors.ltRed);
        setStatusTextColor(Colors.redText2);
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
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <FastImage
            source={{uri: substitute?.primaryImage?.uri}}
            resizeMode="contain"
            style={{width: 35, height: 29}}
          />
          <View
            style={{
              width: responsiveWidth(45),
            }}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[Fonts.subHeader2, {lineHeight: 22}]}>
              {substitute?.name}
            </Text>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              {substitute?.category?.name}
            </Text>
          </View>
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
          marginVertical: 13,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: responsiveWidth(45), gap: 3}}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[Fonts.body4, {color: Colors.grayText}]}>
            Replacement for: {orderItem?.product?.name}
          </Text>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>Qty:</Text>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              {orderItem?.quantity}
            </Text>
          </View>
        </View>
        <View style={{gap: 10}}>
          <View style={{gap: 4, alignItems: 'flex-end'}}>
            <Text style={[Fonts.subHeader2]}>
              $
              {substitute?.price && orderItem.quantity
                ? (substitute?.price * orderItem.quantity).toFixed(2)
                : 0}
            </Text>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              Total Amount
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
