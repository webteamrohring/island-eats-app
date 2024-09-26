import React, {useContext} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import {Colors, Fonts} from '@styles';
import FastImage from 'react-native-fast-image';
import {centerContent, circle, imageContain} from '@styles/MainStyles';

import MailIcon from '@icons/mail.svg';
import BellIcon from '@icons/bell.svg';
import {SvgXml} from 'react-native-svg';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppContext from '@contexts/AppContext.tsx';

export default () => {
  const {user} = useContext(AppContext);

  const NotifIndicator = () => (
    <View
      style={{
        ...circle(8),
        backgroundColor: Colors.red,
        borderWidth: 1,
        borderColor: Colors.white,
        position: 'absolute',
        top: responsiveHeight(1),
        right: responsiveWidth(1.8),
      }}
    />
  );

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          gap: 6,
        }}>
        <FastImage
          source={
            user
              ? {uri: user.profileImage}
              : require('@placeholders/user_placeholder1.png')
          }
          style={[imageContain(38), {borderRadius: 38}]}
        />
        <View style={{justifyContent: 'center'}}>
          <Text style={[Fonts.body3, {color: Colors.text}]}>
            Hi {user && user.firstName}!
          </Text>
          <Text style={[Fonts.footnote2, {color: Colors.text}]}>
            Welcome to your dashboard!
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 6.3}}>
        <TouchableOpacity
          style={[circle(31), centerContent, {backgroundColor: Colors.white}]}>
          <SvgXml xml={MailIcon.toString()} width="16" height="16" />
          <NotifIndicator />
        </TouchableOpacity>
        <TouchableOpacity
          style={[circle(31), centerContent, {backgroundColor: Colors.white}]}>
          <SvgXml xml={BellIcon.toString()} width="16" height="16" />
          <NotifIndicator />
        </TouchableOpacity>
      </View>
    </View>
  );
};
