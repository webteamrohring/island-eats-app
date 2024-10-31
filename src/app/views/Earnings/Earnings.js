import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {uiColors} from '@utils/colors';
import Divider from '@components/Dividers/Dividers';

const Earnings = () => {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.earningsContainer}>
        <Divider></Divider>
      </View>
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
  earningsContainer: {
    backgroundColor: uiColors.black.semiDark,
    alignItems: 'center',
    width: '100%',
    padding: 20,
    borderRadius: 18,
  },
});

export default Earnings;

{
  /* <View style={s.earningsContainer}>
        <Text style={s.earningsText}>$300.21</Text>
        <Text style={s.subText}>Today's Earnings</Text>
        <View style={s.detailsContainer}>
          <Text style={s.detailsText}>15 deliveries</Text>
          <Text style={s.detailsText}>5h 45m</Text>
        </View>
      </View> */
}

/* container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#121212', // Dark background
  },
  earningsContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#2A2A2A', // Darker gray for card
    borderRadius: 10,
    alignItems: 'center',
  },
  earningsText: {
    fontSize: 32,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  subText: {
    fontSize: 16,
    color: '#A0A0A0', // Light gray for secondary text
    marginTop: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  detailsText: {
    fontSize: 16,
    color: '#A0A0A0',
  }, */
