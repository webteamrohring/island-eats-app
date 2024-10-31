import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from '@assets/images/TransparentWhiteLogo.png';
import Input from '@components/Inputs/Input';
import useMethod from './method';
import Buttons from '@components/Buttons/Buttons';
import { uiColors } from '@utils/colors';

const { width } = Dimensions.get('screen');

const LinkSent = () => {
  const { login, handleChange, handleSendLink, navigation } = useMethod();
  return (
    <SafeAreaView style={s.container}>
      <View style={s.innerContainer}>
        <Image source={Logo} />
        <Text style={s.header}>Check Your Email!</Text>
        <Text style={s.text}>We've sent you an email with instructions to reset your password.</Text>
        <Buttons text="Back to login" callback={() => navigation.navigate('ResetPassword')} />
      </View>
    </SafeAreaView>
  );
};

export default LinkSent;

const s = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 18,
    gap: 24,
    backgroundColor: uiColors.black.normal,
  },
  innerContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
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
