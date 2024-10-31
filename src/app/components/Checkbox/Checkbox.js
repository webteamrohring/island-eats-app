import {uiColors} from '@utils/colors';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Checkbox = ({isCircular = false, callback = () => {}}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
    callback();
  };

  return isCircular ? (
    <TouchableOpacity
      style={[s.circularContainer, isChecked && s.circularChecked]}
      onPress={handlePress}>
      {isChecked && <Icon name="dot-single" size={16} style={s.circle} />}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[s.container, isChecked && s.checked]}
      onPress={handlePress}>
      {isChecked && <MaterialIcons name="done" size={16} />}
    </TouchableOpacity>
  );
};

export default Checkbox;

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
    borderRadius: 8,
    borderColor: uiColors.green.normal,
    borderWidth: 2,
  },
  circularContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
    borderRadius: 9999,
    borderColor: uiColors.green.normal,
    backgroundColor: uiColors.white.normal,
    borderWidth: 2,
  },
  checked: {
    backgroundColor: uiColors.green.normal,
  },
  circularChecked: {
    backgroundColor: uiColors.white.normal,
  },
  circle: {
    color: uiColors.green.normal,
  },
});
