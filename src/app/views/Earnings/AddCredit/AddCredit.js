import React from 'react';
import s from './styles';
import { SafeAreaView, Text, View } from 'react-native';
import Input from '@components/Inputs/Input';

const AddCredit = () => {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.instructionTextContainer}>
        <Text style={s.instructionText}>Let’s start with your card number</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddCredit;
