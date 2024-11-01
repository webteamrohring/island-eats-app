import React from 'react';
import { uiColors } from '@utils/colors';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Buttons = ({
  text,
  isDisabled = false,
  callback = () => {},
  backgroundColor = uiColors.green.normal,
  disabledBackgroundColor = uiColors.white.darker,
  textColor = uiColors.white.normal,
  disabledTextColor = uiColors.white.normal,
  fontSize = 18,
  fontWeight = '500',
  lineHeight = 22,
  paddingVertical = 16,
  paddingHorizontal = 16,
  borderRadius = 8,
  borderWidth = 0,
  borderColor = 'transparent',
  width = '100%',
  style,
  textStyle,
}) => {
  const handlePress = () => {
    if (isDisabled) return;
    callback();
  };

  return (
    <TouchableOpacity
      style={[
        s.container,
        {
          backgroundColor: isDisabled
            ? disabledBackgroundColor
            : backgroundColor,
          paddingVertical,
          paddingHorizontal,
          borderRadius,
          borderWidth,
          borderColor,
          width,
        },
        style,
      ]}
      activeOpacity={0.6}
      disabled={isDisabled}
      onPress={handlePress}
    >
      <Text
        style={[
          s.text,
          {
            color: isDisabled ? disabledTextColor : textColor,
            fontSize,
            fontWeight,
            lineHeight,
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.1, // Reduce opacidad cuando está deshabilitado para mayor claridad
  },
  text: {
    textAlign: 'center',
  },
});
