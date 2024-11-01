import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { uiColors } from '@utils/colors';
import Logo from '@assets/images/TransparentWhiteLogo.png';
import Input from '@components/Inputs/Input';
import Buttons from '@components/Buttons/Buttons';
import useMethod from './method';

const { width } = Dimensions.get('screen');

const ResetPassword = () => {
  const { resetPassword, pwdCondition, handleChangePassword, isButtonDisabled, handleUpdatePassword } = useMethod();

  return (
    <SafeAreaView style={s.container}>
      <ScrollView>

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
          <View style={s.conditionsContainer}>
            <Text style={[s.pwdCondition, pwdCondition.length && s.success]}>The password must be between 8 and 16 characters long.</Text>
            <Text style={[s.pwdCondition, pwdCondition.number && s.success]}>The password must contain at least one number.</Text>
            <Text style={[s.pwdCondition, pwdCondition.lowerCase && s.success]}>The password must include at least one lowercase letter.</Text>
            <Text style={[s.pwdCondition, pwdCondition.upperCase && s.success]}>The password must include at least one uppercase letter.</Text>
            <Text style={[s.pwdCondition, pwdCondition.special && s.success]}>The password must contain at least one special character.</Text>
            <Text style={[s.pwdCondition, pwdCondition.noSpaces && s.success]}>The password cannot contain any spaces.</Text>
            <Text style={[s.pwdCondition, pwdCondition.match && s.success]}>Password match.</Text>
          </View>
          <Buttons text="Update Password" isDisabled={isButtonDisabled('updatePassword')} callback={handleUpdatePassword} />
        </View>
      </ScrollView>
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
  conditionsContainer: {
    alignItems: 'flex-start',
    gap: 4,
  },
  pwdCondition: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: uiColors.white.normal,
  },
  success: {
    color: uiColors.green.normal,
  },
});
