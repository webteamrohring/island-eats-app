import React, {PropsWithoutRef, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Colors, Fonts} from '@styles';
import {CustomerOrderItemProps} from '@components/ListItems/interfaces';

import SimpleBtn from '@components/Buttons/SimpleBtn.tsx';
import {OrderItemStatus, SubstitutionStatus} from '@interfaces';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigation/Interfaces';
import OrderContext from '@contexts/OrderContext.tsx';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default ({
  _id,
  product,
  substitute,
  quantity = 1,
  canSubstitute,
  status = OrderItemStatus.PENDING,
  onMarkItem,
}: PropsWithoutRef<CustomerOrderItemProps>) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const {orderId} = useContext(OrderContext);

  const [statusIndex, setStatusIndex] = useState(0);
  useEffect(() => {
    setStatusIndex(Object.keys(OrderItemStatus).findIndex(s => s === status));
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
          gap: 5,
        }}>
        <FastImage
          source={{uri: product?.primaryImage?.uri}}
          resizeMode="contain"
          style={{width: 35, height: 29}}
        />
        <View style={{width: responsiveWidth(60)}}>
          <Text
            style={[
              Fonts.subHeader2,
              {flex: 1, flexWrap: 'wrap', lineHeight: 22},
            ]}>
            {product?.name}
          </Text>
          <Text style={[Fonts.body4, {color: Colors.grayText}]}>
            {product?.category?.name}
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
        <View style={{gap: 3}}>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>Price:</Text>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              ${product?.price.toFixed(2)}
            </Text>
          </View>

          <View style={{flexDirection: 'row', gap: 4}}>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>Qty:</Text>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              {quantity}
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              Substitution:
            </Text>
            <Text
              style={[
                Fonts.body4,
                {color: Colors.grayText, textTransform: 'capitalize'},
              ]}>
              {canSubstitute ? 'Yes' : 'No'}
            </Text>
          </View>
        </View>
        <View style={{gap: 10}}>
          <View style={{gap: 4, alignItems: 'flex-end'}}>
            <Text style={[Fonts.subHeader2]}>
              ${product?.price ? (product.price * quantity).toFixed(2) : 0}
            </Text>
            <Text style={[Fonts.body4, {color: Colors.grayText}]}>
              Total Amount
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 8,
          marginTop: 13,
        }}>
        {status !== OrderItemStatus.REJECTED ? (
          <>
            {status === OrderItemStatus.PENDING &&
              canSubstitute &&
              !substitute && (
                <SimpleBtn
                  onPress={() =>
                    navigation.navigate('OrderSubstitutionCreation', {
                      id: orderId,
                      itemId: _id,
                    })
                  }
                  title="Suggest Substitute"
                  bgColor={Colors.blue}
                  containerStyle={{width: '50%'}}
                />
              )}

            <SimpleBtn
              disabled={
                substitute && substitute.status !== SubstitutionStatus.APPROVED
              }
              onPress={() =>
                onMarkItem(
                  _id,
                  status !== OrderItemStatus.PENDING
                    ? OrderItemStatus.PENDING
                    : OrderItemStatus.PICKED,
                )
              }
              // disabled={status !== OrderItemStatus.PENDING}
              bgColor={statusIndex > 0 ? Colors.drkBlue : Colors.primary}
              title={
                statusIndex > 0
                  ? 'Picked'
                  : substitute &&
                    substitute.status !== SubstitutionStatus.APPROVED
                  ? 'Substitution not approved'
                  : 'Mark as Picked'
              }
              containerStyle={{width: '50%'}}
            />
          </>
        ) : (
          <SimpleBtn
            disabled={true}
            bgColor={Colors.drkRed}
            title="Not Available"
          />
        )}
      </View>
    </View>
  );
};
