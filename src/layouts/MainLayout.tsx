import React, {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, ScrollView, StatusBar, View} from 'react-native';

import {MainLayoutContainerProps} from './Interfaces';
import {Colors} from '@styles';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {gutters} from '@styles/MainStyles.ts';
import TopBar from '@layouts/components/TopBar.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default (props: PropsWithChildren<MainLayoutContainerProps>) => {
  const {
    headerComponent,
    headerHeight = 4.5,
    headerStyle,
    scrollable = true,
    scrollViewRef,
    refreshControl,
    isModal = false,
    contentContainerStyle,
    contentStyle,
    children,
    compact = false,
    hasBackButton = false,
    hasStatusBar = true,
    title,
    keyboardBehavior = 'height',
    footerComponent,
    footerHeight = 10,
    footerStyle,
  } = props;

  const insets = useSafeAreaInsets();

  return (
    <View>
      {hasStatusBar && (
        <View
          style={{
            backgroundColor: Colors.white,
            height: insets.top,
            width: '100%',
          }}
        />
      )}

      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {(hasBackButton || title) && <TopBar {...props} />}

      {typeof headerComponent !== 'undefined' && (
        <View
          style={{
            height: responsiveHeight(headerHeight),
            paddingHorizontal: isModal ? 8 : compact ? 0 : gutters,
            backgroundColor: Colors.white,
            ...headerStyle,
          }}>
          {headerComponent}
        </View>
      )}

      <KeyboardAvoidingView
        behavior={keyboardBehavior}
        keyboardVerticalOffset={50}
        style={{
          height: responsiveHeight(100 - footerHeight) - insets.top,
          borderRadius: isModal ? 24 : 0,
          paddingHorizontal: isModal ? 8 : compact ? 0 : gutters,
          ...contentContainerStyle,
        }}>
        {scrollable ? (
          <ScrollView
            ref={scrollViewRef}
            scrollEnabled={scrollable}
            refreshControl={refreshControl}
            contentContainerStyle={{
              paddingBottom: responsiveHeight(20),
              ...contentStyle,
            }}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        ) : (
          <View
            style={{
              flex: 1,
              ...contentStyle,
            }}>
            {children}
          </View>
        )}
      </KeyboardAvoidingView>

      {typeof footerComponent !== 'undefined' && (
        <View
          style={[
            {
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: responsiveHeight(footerHeight),
              width: responsiveWidth(100),
              paddingHorizontal: gutters,
              alignItems: 'center',
            },
            footerStyle,
          ]}>
          {footerComponent}
        </View>
      )}
    </View>
  );
};
