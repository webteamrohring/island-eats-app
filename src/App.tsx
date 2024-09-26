import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as ThemeProvider} from '@ant-design/react-native';
import MainTheme from '@styles/MainTheme';
import {AppProvider} from '@contexts/AppContext.tsx';
import {OnloadingPage} from '@pages';
import {OrderProvider} from '@contexts/OrderContext.tsx';
import {AutocompleteDropdownContextProvider} from 'react-native-autocomplete-dropdown';
import {Appearance} from 'react-native';
import setColorScheme = Appearance.setColorScheme;
import {ChatProvider} from '@contexts/ChatContext.tsx';

export default () => {
  const onReady = async () => {
    setColorScheme('light');
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <AutocompleteDropdownContextProvider>
        <NavigationContainer onReady={onReady}>
          <AppProvider>
            <OrderProvider>
              <ChatProvider>
                <OnloadingPage />
              </ChatProvider>
            </OrderProvider>
          </AppProvider>
        </NavigationContainer>
      </AutocompleteDropdownContextProvider>
    </ThemeProvider>
  );
};
