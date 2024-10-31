import uiColors from '@utils/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Buttons = ({text, isDisabled = false, callback = () => {}}) => {
  const handlePress = () => {
    callback();
  };
  return (
    <TouchableOpacity
      style={[s.container, isDisabled && s.disabled]}
      activeOpacity={0.6}
      disabled={isDisabled}
      onPress={handlePress}>
      <Text style={s.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const s = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: uiColors.green.normal,
  },
  disabled: {
    backgroundColor: uiColors.white.darker,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    color: uiColors.white.normal,
  },
});
