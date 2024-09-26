import React, {createContext, ReactNode, useEffect, useState} from 'react';

import {AppContextType, LocationType, UserType} from '@interfaces';
import {socket} from 'src/socket';
import SplashScreen from 'react-native-splash-screen';
import {centerContent} from '@styles/MainStyles.ts';
import {Colors} from '@styles';
import {ActivityIndicator} from '@ant-design/react-native';

import {StyleSheet, View} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import type {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation/lib/typescript/js/NativeRNCGeolocation';
import InfoModal from '@components/Modals/InfoModal.tsx';
const AppContext = createContext<AppContextType>({
  user: null,
  setUser: () => null,
  loading: false,
  setLoading: () => false,
  currentLocation: null,
  showAlert: () => {},
});

type AppContextProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({children}: AppContextProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [currentLocation, setCurrentLocation] = useState<LocationType | null>(
    null,
  );

  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [infoModalTitle, setInfoModalTitle] = useState('');
  const [infoModalBody, setInfoModalBody] = useState('');

  const [locationWatchId, setLocationWatchId] = useState<number | null>(null);

  useEffect(() => {
    onGetCurrentLocation().then(() => {});

    return () => {
      clearWatchLocation();
    };
  }, []);

  const clearWatchLocation = () => {
    if (locationWatchId) {
      Geolocation.clearWatch(locationWatchId);
      setCurrentLocation(null);
    }
    setLocationWatchId(null);
  };

  const onGetCurrentLocation = async () => {
    const authGranted = true;
    try {
      Geolocation.requestAuthorization(
        () => {},
        (error: GeolocationError) => {
          console.log(error);
        },
      );
    } catch (error) {
      console.log('Geolocation Error: ', JSON.stringify(error));
    }
    if (authGranted) {
      try {
        const watchId = Geolocation.watchPosition(
          ({coords}: GeolocationResponse) => {
            setCurrentLocation(coords);
          },
          error => console.log('Geolocation Error: ', JSON.stringify(error)),
        );
        setLocationWatchId(watchId);
      } catch (error) {
        console.log('Geolocation Error: ', JSON.stringify(error));
      }
    } else {
      console.log('Location Permission not granted');
    }
  };

  useEffect(() => {
    if (user) {
      socket.emit('room:join', {room: `user:${user._id}`});
      SplashScreen.hide();
    }
  }, [user]);

  const showAlert = (title: string, body: string) => {
    setInfoModalTitle(title);
    setInfoModalBody(body);
    setIsInfoModalVisible(true);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        currentLocation,
        showAlert,
      }}>
      {children}
      {loading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Colors.overlay2,
            },
            centerContent,
          ]}>
          <ActivityIndicator color={Colors.primary} size="large" />
        </View>
      )}
      <InfoModal
        visible={isInfoModalVisible}
        title={infoModalTitle}
        body={infoModalBody}
        onDismiss={() => setIsInfoModalVisible(false)}
      />
    </AppContext.Provider>
  );
};

export default AppContext;
