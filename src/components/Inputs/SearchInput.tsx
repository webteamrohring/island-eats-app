import React, {PropsWithoutRef, useState} from 'react';
import {View, TextInput} from 'react-native';
import {Colors, Fonts} from '@styles';
import {SearchInputProps} from '@components/Inputs/Interfaces';
import {SvgXml} from 'react-native-svg';
import SearchIcon from '@icons/search.svg';

export default ({
  placeholder,
  style = {},
  height = 39,
  width = '100%',
  value,
  onChangeText,
  borderColor = Colors.primary,
  inputFont = Fonts.footnote,
  inputStyle,
  multiline = false,
}: PropsWithoutRef<SearchInputProps>) => {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: Colors.background2,
        borderWidth: 0.76,
        borderColor: focused ? borderColor : Colors.borderInput,
        borderRadius: 10,
        paddingHorizontal: 8,
        justifyContent: 'center',
        gap: 2,
        ...style,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 9,
        }}>
        <SvgXml xml={SearchIcon.toString()} width={14} height={14} />
        <TextInput
          style={[
            inputFont,
            {
              flex: 1,
              color: Colors.primary,
            },
            inputStyle,
          ]}
          multiline={multiline}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.grayText}
        />
      </View>
    </View>
  );
};
