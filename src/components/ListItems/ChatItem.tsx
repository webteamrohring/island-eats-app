import React, {PropsWithoutRef, useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ChatItemProps} from '@components/ListItems/interfaces';
import FastImage from 'react-native-fast-image';
import {centerContent, circle} from '@styles/MainStyles.ts';
import moment from 'moment';
import {Colors, Fonts} from '@styles';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigation/Interfaces';
import AppContext from '@contexts/AppContext.tsx';
import {UserType} from '@interfaces';
export default ({
  _id,
  users,
  metaData,
  lastMessage,
}: PropsWithoutRef<ChatItemProps>) => {
  const {user} = useContext(AppContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const currentDate = moment(lastMessage?.updatedAt);

  const [sender, setSender] = useState<UserType | null>(null);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  useEffect(() => {
    if (users && users.length > 0) {
      const senderData = users.find(u => u._id !== user?._id);
      if (typeof senderData !== 'undefined') {
        setSender(senderData);
      }
    }
  }, [users]);

  useEffect(() => {
    if (metaData && metaData.length > 0) {
      const userMetaData = metaData.find(m => m.user === user?._id);

      if (typeof userMetaData !== 'undefined') {
        setUnreadCount(userMetaData.unreadCount);
      }
    }
  }, [metaData]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ChatMessages', {id: _id, sender})}
      style={{flexDirection: 'row', gap: 16}}>
      {sender && (
        <FastImage
          source={{uri: sender.profileImage}}
          style={{...circle(42)}}
        />
      )}

      <View style={{flex: 1, gap: 8}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '60%'}}>
            <Text
              style={[
                Fonts.subHeader4,
                {
                  textAlign: 'left',
                },
              ]}>
              {sender && `${sender.firstName} ${sender.lastName}`}
            </Text>
            <Text
              style={[
                Fonts.body4,
                {
                  textAlign: 'left',
                  textTransform: 'capitalize',
                  color: Colors.grayText3,
                },
              ]}>
              {sender && `${sender.userType}`}
            </Text>
          </View>

          <Text
            style={[
              Fonts.body4,
              {
                width: '40%',
                color: Colors.grayText3,
                textAlign: 'right',
              },
            ]}>
            {currentDate.format('HH:mm DD/MM')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={[Fonts.body5, {width: '85%', color: Colors.grayText4}]}
            numberOfLines={1}>
            {lastMessage?.message}
          </Text>
          {unreadCount > 0 && (
            <View
              style={{
                width: responsiveWidth(4.44),
                height: responsiveHeight(2.2),
                borderRadius: 4,
                ...centerContent,
                backgroundColor: Colors.primary,
              }}>
              <Text style={[Fonts.body8, {color: Colors.white}]}>
                {unreadCount}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
