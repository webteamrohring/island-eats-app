import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { uiColors } from '@utils/colors';

const CustomHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Icon name="arrowleft" size={24} color={uiColors.white.normal} />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{title}</Text>

      <View style={styles.rightPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: uiColors.black.dark,
    paddingHorizontal: 16,
    height: 50,
  },
  backButton: {
    width: 24,
    alignItems: 'flex-start',
  },
  headerTitle: {
    color: uiColors.white.normal,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  rightPlaceholder: {
    width: 24,
  },
});

export default CustomHeader;
