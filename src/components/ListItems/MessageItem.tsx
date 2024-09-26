import React, {PropsWithChildren, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '@styles';
import {MessageItemProps} from '@components/ListItems/interfaces';
import AppContext from '@contexts/AppContext.tsx';
import FastImage from 'react-native-fast-image';
import {circle} from '@styles/MainStyles.ts';

export default ({
  message,
  createdAt,
  user,
}: PropsWithChildren<MessageItemProps>) => {
  const {user: userData} = useContext(AppContext);

  const [mine, setMine] = useState<boolean>(false);

  useEffect(() => {
    if (userData && user) {
      setMine(userData._id == user._id);
    }
  }, [userData]);

  return (
    <View
      style={{
        flexDirection: mine ? 'row-reverse' : 'row',
        alignSelf: mine ? 'flex-end' : 'flex-start',
        gap: 10,
      }}>
      {user && (
        <FastImage source={{uri: user.profileImage}} style={{...circle(42)}} />
      )}
      <View
        style={{
          maxWidth: responsiveWidth(72),
          borderTopStartRadius: 17,
          borderTopEndRadius: 17,
          borderBottomLeftRadius: mine ? 16 : 0,
          borderBottomRightRadius: mine ? 0 : 16,
          backgroundColor: mine ? Colors.primary : Colors.white,
          justifyContent: 'center',
          alignSelf: mine ? 'flex-end' : 'flex-start',
          paddingVertical: 14,
          paddingHorizontal: 10,
          gap: 10,
        }}>
        <Text
          style={[
            Fonts.subHeader,
            {color: mine ? Colors.white : Colors.blackText3},
          ]}>
          {message}
        </Text>

        <Text
          style={[
            Fonts.body4,
            {
              color: Colors.grayText7,
              alignSelf: mine ? 'flex-end' : 'flex-start',
            },
          ]}>
          {moment(createdAt).format('HH:mm')}
        </Text>
      </View>
    </View>
  );
};
