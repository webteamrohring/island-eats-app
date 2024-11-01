import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { uiColors } from '@utils/colors';

const SmallButton = ({ text, callback = () => {}, isDisabled = false }) => {
  const handlePress = () => {
    if (!isDisabled) callback();
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isDisabled
            ? styles.disabledBackground.color
            : styles.background.color,
        },
        isDisabled && styles.disabled,
      ]}
      activeOpacity={0.6}
      disabled={isDisabled}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.text,
          { color: isDisabled ? styles.disabledText.color : styles.text.color },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: uiColors.green.normal,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 50,
    width: 'auto',
  },
  disabledBackground: {
    color: uiColors.white.darker,
  },
  background: {
    color: uiColors.green.normal,
  },
  text: {
    color: uiColors.white.normal,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },
  disabledText: {
    color: uiColors.white.normal,
  },
  disabled: {
    opacity: 0.6,
  },
});
