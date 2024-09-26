import React, {PropsWithChildren, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '@styles';
import {Controller} from 'react-hook-form';

import {SimpleInputProps} from '@components/Inputs/Interfaces';
import {SvgXml} from 'react-native-svg';
import EyeCloseIcon from '@icons/eyeCloseIcon.svg';
import EyeOpenIcon from '@icons/eyeOpenIcon.svg';
export default ({
  control,
  name,
  placeholder,
  secureTextEntry = false,
  style,
  height = 41,
  width,
  borderColor = Colors.primary,
  inputFont = Fonts.body,
  title,
  titleFont = Fonts.subHeader7,
  inputStyle,
  multiline = false,
  textContentType = 'none',
  keyboardType = 'default',
  rules,
  onSubmitEditing,
}: PropsWithChildren<SimpleInputProps>) => {
  const [showText, setShowText] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: {ref, onChange, onBlur, value},
        fieldState: {isTouched},
      }) => (
        <View style={{flex: width ? 0 : 1, gap: 5, width: width}}>
          {typeof title !== 'undefined' && (
            <Text
              style={[
                titleFont,
                {
                  color: Colors.grayText12,
                },
              ]}>
              {title}
            </Text>
          )}

          <View
            style={{
              height: height,
              borderWidth: 2,
              borderColor: isTouched ? borderColor : Colors.borderInput,
              borderRadius: 9,
              paddingHorizontal: 16,
              paddingVertical: typeof title !== 'undefined' ? 10 : 0,
              justifyContent: 'center',
              gap: 2,
              ...style,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextInput
                style={{
                  flex: 1,
                  ...inputFont,
                  ...inputStyle,
                  color: Colors.primary,
                }}
                ref={ref}
                multiline={multiline}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry && !showText}
                onSubmitEditing={onSubmitEditing}
                placeholderTextColor={Colors.grayText}
                keyboardType={keyboardType}
                textContentType={secureTextEntry ? 'password' : textContentType}
              />

              {secureTextEntry && (
                <TouchableOpacity onPress={() => setShowText(!showText)}>
                  <SvgXml
                    xml={
                      showText
                        ? EyeOpenIcon.toString()
                        : EyeCloseIcon.toString()
                    }
                    width={20}
                    height={20}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      )}
    />
  );
};
