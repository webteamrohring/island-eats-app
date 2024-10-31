import React from 'react';
import 'react-native-gesture-handler';
// import Navigation from './src/app/router/router';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/app/router/MainStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
