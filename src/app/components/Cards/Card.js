import React from 'react';
import {View, StyleSheet} from 'react-native';
import {uiColors} from '@utils/colors';

const Card = ({
  children,
  backgroundColor = uiColors.black.semiDark,
  paddingTop = 15,
  paddingRight = 18,
  paddingBottom = 14,
  paddingLeft = 14,
  borderRadius = 18,
  justifyContent = 'space-between',
  alignItems = 'center',
  flexDirection = 'row',
  width = '100%',
  style,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor,
          paddingTop,
          paddingRight,
          paddingBottom,
          paddingLeft,
          borderRadius,
          justifyContent,
          alignItems,
          flexDirection,
          width,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
  },
});

export default Card;
