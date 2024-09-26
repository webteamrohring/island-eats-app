import React, {useState} from 'react';

import {Platform, StyleSheet} from 'react-native';

import {TabBar} from '@ant-design/react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import Home from '@pages/Dashboard/Home';

import HomeIcon from '@icons/homeGray.svg';
import HomeSelectedIcon from '@icons/home.svg';

import {responsiveHeight} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {Colors, Fonts} from '@styles';
import {MainStackParamList} from '@navigation/Interfaces';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default ({}: NativeStackScreenProps<
  MainStackParamList,
  'Dashboard'
>) => {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState('Home');

  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  };

  return (
    <TabBar
      unselectedTintColor="#A8A8A8"
      tintColor="#000000"
      value={selectedTab}
      // @ts-ignore
      styles={{
        tabbar: {
          // @ts-ignore
          ...StyleSheet.absoluteFill,
          height: responsiveHeight(100 - (Platform.OS === 'ios' ? 4 : 0)),
        },
        barItemTitle: {...Fonts.caption2},
        content: {backgroundColor: Colors.background},
        contentItemSelected: {backgroundColor: Colors.background},
        tabs: {
          height: responsiveHeight(Platform.OS === 'ios' ? 9.32 : 7.8),
          borderTopWidth: 0,
          marginBottom: -insets.bottom,
          paddingBottom: responsiveHeight(Platform.OS === 'ios' ? 2 : 1),
          alignItems: 'center',
        },
      }}>
      <TabBar.Item
        title="Home"
        icon={
          selectedTab === 'Home' ? (
            <SvgXml xml={HomeSelectedIcon.toString()} width="24" height="24" />
          ) : (
            <SvgXml xml={HomeIcon.toString()} width="24" height="24" />
          )
        }
        selected={selectedTab === 'Home'}
        onPress={() => onChangeTab('Home')}>
        <Home />
      </TabBar.Item>
    </TabBar>
  );
};
