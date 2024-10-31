import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({
  color = '#BDBDBD',
  thickness = StyleSheet.hairlineWidth,
  width = '100%',
  marginVertical = 10,
  style,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {backgroundColor: color, height: thickness, width, marginVertical},
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
