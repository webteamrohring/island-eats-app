import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import uiColors from '@utils/colors';
import Logo from '@assets/images/TransparentWhiteLogo.png';
import Input from '@components/Inputs/Input';
import Buttons from '@components/Buttons/Buttons';
import Checkbox from '@components/Checkbox/Checkbox';
import useMethod from './method';

const {width} = Dimensions.get('screen');

const Login = () => {
  const {login, handleLogIn, handleChange} = useMethod();

  return (
    <SafeAreaView style={s.container}>
      <View style={s.innerContainer}>
        <Image source={Logo} />
        <Text style={s.header}>Welcome Rider!</Text>
        <Input
          label="Email"
          value={login.email}
          fieldName="email"
          callback={value => handleChange(value, 'email')}
        />
        <Input
          label="Password"
          value={login.password}
          fieldName={'password'}
          callback={value => handleChange(value, 'password')}
          isPassword
        />
        <View style={s.rememberContainer}>
          <Checkbox />
          <Text style={s.text}>Remember me</Text>
        </View>
        <Buttons text="Login" callback={() => handleLogIn()} />
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={s.text}>Forgot password?</Text>
        </TouchableOpacity>
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
    gap: 24,
  },
  header: {
    color: uiColors.white.normal,
    fontSize: 31,
  },
  rememberContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingVertical: 16,
    gap: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: uiColors.white.normal,
  },
});
