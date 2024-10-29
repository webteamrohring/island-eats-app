import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import uiColors from '@utils/colors';
import Logo from '@assets/images/TransparentWhiteLogo.png';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('BottomTabNavigator');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return(
    <View style={s.container}>
      <Image source={Logo}/>
    </View>
  );
};

export default SplashScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: uiColors.green.normal,
  },
});
