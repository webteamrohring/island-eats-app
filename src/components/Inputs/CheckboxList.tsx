import React, {PropsWithoutRef} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '@styles';

import {CheckBoxListProps} from '@components/Inputs/Interfaces';
import {Shadow} from 'react-native-shadow-2';
export default ({
  list,
  value,
  onChange,
  multiple = false,
  max = 1,
}: PropsWithoutRef<CheckBoxListProps>) => {
  const onChangeValue = (v: any, selected = false) => {
    if (multiple) {
      if (value.length < max || selected) {
        if (selected && Array.isArray(value)) {
          onChange(value.filter(o => o !== v));
        } else {
          onChange([...value, v]);
        }
      }
    } else {
      onChange(v);
    }
  };

  return (
    <Shadow
      distance={5}
      offset={[0, 2]}
      startColor={Colors.shadow1}
      endColor={Colors.shadow2}
      style={{
        width: '100%',
        gap: 8,
        paddingVertical: 12,
        borderRadius: 7,
        backgroundColor: Colors.white,
        borderWidth: 0.76,
        borderColor: Colors.border2,
      }}>
      <>
        {list &&
          list.map((l, key) => {
            const selected: boolean = Boolean(
              multiple && Array.isArray(value)
                ? value.find(v => v === l.value)
                : l.value === value,
            );

            return (
              <TouchableOpacity
                key={key}
                onPress={() => onChangeValue(l.value, selected)}
                style={{}}>
                <View
                  style={{
                    width: '100%',
                    paddingHorizontal: 12,
                    height: 30,
                    borderRadius: 4,
                    justifyContent: 'center',
                    gap: 6,
                    opacity: selected ? 1 : 0.7,

                    // overflow: 'hidden',
                  }}>
                  <Text
                    style={{
                      ...Fonts.body6,
                      color: selected ? Colors.black : Colors.grayText,
                      textTransform: 'capitalize',
                    }}>
                    {l.text}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </>
    </Shadow>
  );
};
