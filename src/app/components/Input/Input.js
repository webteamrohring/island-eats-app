import uiColors from '@utils/colors';
import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

const { width } = Dimensions.get('screen');

const Input = ({ label }) => {
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <TextInput
        style={s.input}
        keyboardType="email-address"
        autoCapitalize="none"
        selectionColor={uiColors.green.normal}
      />
    </View>
  );
};

export default Input;

const s = StyleSheet.create({
  container: {
    width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
    gap: 8,
  },
  label: {
    color: uiColors.white.dark,
  },
  input: {
    width: '100%',
    height: 48,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: uiColors.white.darkActive,
    backgroundColor: uiColors.white.darker,
    color: uiColors.white.normal,
  },
});
