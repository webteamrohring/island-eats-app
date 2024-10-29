import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import uiColors from '@utils/colors';
import Logo from '@assets/images/TransparentWhiteLogo.png';

const Login = () => {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.container}>
        <Image source={Logo} />
        <Text style={s.header}>Welcome Rider!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: uiColors.black.normal,
  },
  header: {
    color: uiColors.white.normal,
    fontSize: 31,
  },

});
