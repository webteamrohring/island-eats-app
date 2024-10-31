import {uiColors} from '@utils/colors';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('screen');

const Input = props => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeText = value => {
    props.callback(value);
  };

  return (
    <View style={s.container}>
      <Text style={s.label}>{props.label}</Text>
      <View style={[s.inputContainer, isFocused && s.inputFocused]}>
        <TextInput
          style={s.input}
          keyboardType="email-address"
          autoCapitalize="none"
          selectionColor={uiColors.green.normal}
          secureTextEntry={!isVisible}
          value={props.value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={handleChangeText}
        />
        {props.isPassword && (
          <TouchableOpacity
            style={s.icon}
            onPress={() => setIsVisible(!isVisible)}>
            <Icon
              name={isVisible ? 'visibility' : 'visibility-off'}
              size={24}
              color={uiColors.green.normal}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const s = StyleSheet.create({
  container: {
    width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    gap: 8,
  },
  label: {
    color: uiColors.white.dark,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    width: '100%',
    padding: 8,
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: uiColors.white.darkActive,
    backgroundColor: uiColors.white.darker,
  },
  input: {
    width: '90%',
    color: uiColors.white.normal,
  },
  inputFocused: {
    borderColor: uiColors.green.normal,
  },
  icon: {
    width: '10%',
  },
});
