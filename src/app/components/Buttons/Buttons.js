import { uiColors } from '@utils/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Buttons = ({ text, isDisabled = false, callback = () => { } }) => {
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
    backgroundColor: uiColors.black.lightActive,
  },
  text: {
    textAlign: 'center',
  },
});
