import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { uiColors } from '@utils/colors';

const Card = ({
  callback,
  children,
  backgroundColor = uiColors.black.semiDark,
  paddingTop = 15,
  paddingRight = 18,
  paddingBottom = 14,
  paddingLeft = 14,
  borderRadius = 18,
  marginTop = 0,
  marginBottom = 0,
  gap = 0,
  justifyContent = 'space-between',
  alignItems = 'center',
  flexDirection = 'row',
  width = '100%',
  style,
}) => {
  const Container = callback ? TouchableOpacity : View;

  return (
    <Container
      onPress={callback}
      style={[
        styles.card,
        {
          backgroundColor,
          marginTop,
          marginBottom,
          paddingTop,
          paddingRight,
          paddingBottom,
          paddingLeft,
          borderRadius,
          justifyContent,
          alignItems,
          flexDirection,
          width,
          gap,
        },
        style,
      ]}
    >
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
  },
});

export default Card;
