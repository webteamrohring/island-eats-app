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
import { uiColors } from '@utils/colors';
import Logo from '@assets/images/TransparentWhiteLogo.png';
import Input from '@components/Inputs/Input';
import Buttons from '@components/Buttons/Buttons';
import Checkbox from '@components/Checkbox/Checkbox';
import useMethod from './method';

const { width } = Dimensions.get('screen');

const ResetPassword = () => {
  const { resetPassword, handleChangePassword, navigation } = useMethod();

  return (
    <SafeAreaView style={s.container}>
      <View style={s.innerContainer}>
        <Image source={Logo} />
        <Text style={s.header}>Reset Your Password</Text>
        <Text style={s.text}>Please enter your new password below.</Text>
        <Input
          label="New Password"
          value={resetPassword.new}
          callback={value => handleChangePassword(value, 'new')}
          isPassword
        />
        <Input
          label="Confirm Password"
          value={resetPassword.password}
          callback={value => handleChangePassword(value, 'confirm')}
          isPassword
        />
        <Buttons text="Update Password" callback={() => { }} />
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
    textAlign: 'center',
    color: uiColors.white.darkHover,
  },
});
