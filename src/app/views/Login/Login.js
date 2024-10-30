import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import uiColors from '@utils/colors';
import Logo from '@assets/images/TransparentWhiteLogo.png';
import Input from '@components/Input/Input';

const { width } = Dimensions.get('screen');
console.log('🚀 ~ width:', width);

const Login = () => {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.innerContainer}>
        <Image source={Logo} />
        <Text style={s.header}>Welcome Rider!</Text>
        <Input label="Email" />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const s = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: uiColors.black.normal,
  },
  innerContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 18,
  },
  header: {
    color: uiColors.white.normal,
    fontSize: 31,
  },

});
