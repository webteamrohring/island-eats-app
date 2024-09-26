import {Colors, Fonts} from '@styles';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {SimpleBtnType} from '@interfaces';

export default ({
  title = '',
  disabled = false,
  bgColor = Colors.primary,
  borderColor = Colors.primary,
  fontStyle = Fonts.caption3,
  textColor = Colors.white,
  onPress,
  width,
  height = responsiveScreenHeight(3.85),
  borderRadius = 3.73,
  containerStyle,
  gap = 0,
  valid = true,
  inverted = false,
}: SimpleBtnType) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        width: width ? width - gap : undefined,
        flexGrow: 1,
        height: height,
        backgroundColor:
          !valid || disabled
            ? Colors.disabled
            : inverted
            ? 'transparent'
            : bgColor,
        borderRadius: borderRadius,
        borderWidth: inverted ? 1 : 0,
        borderColor: inverted ? borderColor : 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: gap,
        ...containerStyle,
      }}>
      <Text style={{...fontStyle, color: inverted ? bgColor : textColor}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
