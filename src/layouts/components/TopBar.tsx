import React, {PropsWithChildren} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '@styles';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {centerContent, circle, gutters} from '@styles/MainStyles';
import {SvgXml} from 'react-native-svg';
import ArrowLeftIcon from '@icons/arrow_left.svg';
import {TopBarProps} from '@layouts/Interfaces';

export default ({
  hasBackButton = false,
  onBackPress,
  title = '',
  titleFont = Fonts.body7,
  titleStyle,
  titleContainerStyle,
  backIcon = ArrowLeftIcon.toString(),
  topBarStyle,
}: PropsWithChildren<TopBarProps>) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: responsiveWidth(100),
        height: responsiveHeight(7.2),
        backgroundColor: Colors.white,
        paddingHorizontal: gutters,
        flexDirection: 'row',

        gap: 12,
        ...topBarStyle,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        {hasBackButton && (
          <TouchableOpacity
            onPress={() => (onBackPress ? onBackPress() : navigation.goBack())}
            style={[
              centerContent,
              circle(28),
              {backgroundColor: Colors.background3},
            ]}>
            <SvgXml xml={backIcon} width="16" height="16" />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          alignItems: 'center',
          ...titleContainerStyle,
        }}>
        {title && (
          <Text
            style={{
              ...titleFont,
              textTransform: 'capitalize',
              ...titleStyle,
            }}>
            {title}
          </Text>
        )}
      </View>
    </View>
  );
};
