import Input from '@components/Inputs/Input';
import { uiColors } from '@utils/colors';
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from '@assets/images/TransparentWhiteLogo.png';
import Buttons from '@components/Buttons/Buttons';
import useMethod from './method';
import { isValidEmail } from '@utils/helpers';

const { width } = Dimensions.get('screen');

const ForgotPassword = () => {
  const { login, handleChange, handleSendLink, navigation } = useMethod();
  return (
    <SafeAreaView style={s.container}>
      <View style={s.innerContainer}>
        <Image source={Logo} />
        <Text style={s.header}>Forgot Your Password?</Text>
        <Text style={s.text}>Please enter your registered email address to receive a password reset link.</Text>
        <Input
          label="Email"
          value={login.email}
          fieldName="email"
          callback={value => handleChange(value, 'email')}
        />
        <Text style={s.text}>If this email is associated with an account, you will receive a reset link shortly.</Text>
        <Buttons text="Send Reset Link" isDisabled={!isValidEmail(login.email)} callback={handleSendLink} />
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Login')}>
          <Text style={s.rememberedText}>Remembered your password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const s = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingHorizontal: 18,
    gap: 24,
    backgroundColor: uiColors.black.normal,
  },
  innerContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 18,
    gap: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: uiColors.white.darkHover,
  },
  header: {
    color: uiColors.white.normal,
    fontSize: 31,
  },
  rememberedText: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    color: uiColors.white.normal,
    textDecorationLine: 'underline',
    textDecorationColor: uiColors.white.normal,
  },
});
