import React from 'react';
import {View, StyleSheet} from 'react-native';
import {uiColors} from '@utils/colors';

const Divider = ({
  color = uiColors.white.darker,
  thickness = StyleSheet.hairlineWidth,
  width = '100%',
  style,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {backgroundColor: color, height: thickness, width},
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'center',
  },
});

export default Divider;
