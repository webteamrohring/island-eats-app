import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { uiColors } from '@utils/colors';

const RoundCheckbox = ({ id, selectedId, onSelect }) => {
  const isSelected = id === selectedId;

  const handlePress = () => {
    onSelect(id);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={
        isSelected
          ? { ...s.outerCircle, borderColor: uiColors.green.normal }
          : s.outerCircle
      }
    >
      {isSelected && <View style={s.innerCircle} />}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: uiColors.white.normal,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: uiColors.white.normal,
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: uiColors.green.normal,
  },
});

export default RoundCheckbox;
