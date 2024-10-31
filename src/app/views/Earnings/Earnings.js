import React from 'react';
import Divider from '@components/Dividers/Dividers';
import Card from '@components/Cards/Card';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {uiColors} from '@utils/colors';

const Earnings = () => {
  return (
    <SafeAreaView style={s.container}>
      <Card></Card>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
    padding: 16,
    flex: 1,
  },
});

export default Earnings;
