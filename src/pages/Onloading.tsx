import React, {useContext, useEffect} from 'react';

import {AuthNavigation, MainNavigation} from '@navigation';
import AppContext from '@contexts/AppContext.tsx';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from 'src/api';
// import {SignInResponse} from 'src/api/interfaces';
import SplashScreen from 'react-native-splash-screen';
// import BackgroundService from 'react-native-background-actions';
// import {
//   compressionBackgroundOptions,
//   sendLocationTask,
// } from 'src/BackgroundActions';
export default () => {
  const {user, setUser} = useContext(AppContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // useEffect(() => {
  //   const checkApiToken = async () => {
  //     await AsyncStorage.getItem('userToken')
  //       .then(async token => {
  //         const refreshToken = await AsyncStorage.getItem('refreshToken');
  //
  //         if (token && refreshToken) {
  //           await api
  //             .post('auth/refresh', {
  //               json: {refreshToken},
  //             })
  //             .json<SignInResponse>()
  //             .then(async response => {
  //               if (response.user) {
  //                 await AsyncStorage.setItem(
  //                   'refreshToken',
  //                   response.refreshToken,
  //                 );
  //                 await AsyncStorage.setItem('userToken', response.token);
  //
  //                 if (typeof setUser !== 'undefined') {
  //                   setUser(response.user);
  //                 }
  //               } else {
  //                 await AsyncStorage.removeItem('userToken');
  //                 await AsyncStorage.removeItem('refreshToken');
  //                 SplashScreen.hide();
  //               }
  //             })
  //             .catch(() => {
  //               SplashScreen.hide();
  //             });
  //         } else {
  //           SplashScreen.hide();
  //         }
  //       })
  //       .catch(() => {
  //         SplashScreen.hide();
  //       });
  //   };
  //   checkApiToken().then(async () => {
  //     await BackgroundService.start(
  //       () => sendLocationTask(),
  //       compressionBackgroundOptions,
  //     );
  //   });
  //
  //   return () => {
  //     BackgroundService.stop().then(() => {});
  //   };
  // }, []);

  return <>{user ? <MainNavigation /> : <AuthNavigation />}</>;
};
