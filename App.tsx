import React from 'react';
import 'react-native-gesture-handler';
// import Navigation from './src/app/router/router';
import {IslandProvider} from './src/app/context/Provider';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/app/navigators/MainStackNavigator';

const App = () => {
  return (
    <IslandProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </IslandProvider>
  );
};

export default App;
