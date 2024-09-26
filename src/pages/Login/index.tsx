import React, {useContext} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ParamListBase} from '@react-navigation/native';
import MainLayout from '@layouts/MainLayout.tsx';
import {Colors, Fonts} from '@styles';
import {SvgXml} from 'react-native-svg';
import SimpleBtn from '@components/Buttons/SimpleBtn.tsx';
import riderLogo from '@icons/rider.svg';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import SimpleInput from '@components/Inputs/SimpleInput.tsx';
import {FieldValues, useForm} from 'react-hook-form';
import AppContext from '@contexts/AppContext.tsx';
import api from 'src/api';
import useFormError from '@hooks/useFormError';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SignInResponse} from 'src/api/interfaces';

export default ({}: NativeStackScreenProps<ParamListBase, 'Login'>) => {
  const {setUser, setLoading} = useContext(AppContext);

  const {
    control,
    trigger,
    getValues,
    formState: {isValidating, isValid, errors},
  } = useForm<FieldValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useFormError(isValidating, errors);

  const onSignIn = async () => {
    // await trigger();
    //
    // if (isValid) {
    //   setLoading(true);
    //   const payload = getValues();
    //   await api
    //     .post('auth/signIn', {
    //       json: {...payload, userType: 'SHOPPER'},
    //     })
    //     .json<SignInResponse>()
    //     .then(async ({refreshToken, token, user}) => {
    //       await AsyncStorage.setItem('userToken', token).then(async () => {
    //         await AsyncStorage.setItem('refreshToken', refreshToken).then(
    //           () => {
    //             if (typeof setUser !== 'undefined') {
    //               setUser(user);
    //             }
    //             setLoading(false);
    //           },
    //         );
    //       });
    //     })
    //     .catch(async error => {
    //       console.log(error);
    //       const response = await error.response.json();
    //       console.log(response.error);
    //       setLoading(false);
    //     });
    // }
  };
  return (
    <MainLayout
      contentContainerStyle={{
        backgroundColor: Colors.primary,
      }}>
      <SvgXml
        xml={riderLogo.toString()}
        width={192}
        height={113}
        style={{alignSelf: 'center', marginTop: 47}}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 18,
          borderRadius: 11,
          marginTop: responsiveHeight(5),
          gap: 15,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={require('@assets/logo.png')}
            style={{
              width: 107.91,
              height: 101,
              resizeMode: 'contain',
            }}
          />

          <View style={{gap: 14, alignItems: 'center'}}>
            <Text style={[Fonts.title2]}>Welcome Back</Text>
            <Text style={[Fonts.body6, {textAlign: 'center'}]}>
              Please log in to continue managing your deliveries and shopping
              orders.
            </Text>
          </View>
        </View>

        <View style={{gap: 15}}>
          <SimpleInput
            control={control}
            name="email"
            placeholder="Email"
            style={{backgroundColor: Colors.background5}}
          />
          <SimpleInput
            control={control}
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            style={{backgroundColor: Colors.background5}}
          />
        </View>

        <TouchableOpacity>
          <Text style={[Fonts.body6, {textAlign: 'center'}]}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        <View>
          <SimpleBtn
            onPress={onSignIn}
            title="Login"
            height={52}
            borderRadius={100}
          />
        </View>
      </View>
    </MainLayout>
  );
};
