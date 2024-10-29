import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import uiColors from '@utils/colors';

const SplashScreen = () => {
  return(
    <View style={s.container}>
      <Text>Splash screen</Text>
    </View>
  );
};

export default SplashScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: uiColors.green.normal,
  },
});
