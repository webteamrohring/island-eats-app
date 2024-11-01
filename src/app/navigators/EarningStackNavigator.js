import React from 'react';
import CustomHeader from '@components/CustomHeader';
import NextStepPayment from '@views/Earnings/NextStepPayment/NextStepPayment';
import AddCredit from '@views/Earnings/AddCredit/AddCredit';
import Withdraw from '@views/Earnings/Withdraw/Withdraw';
import LinkBank from '@views/Earnings/LinkBank/LinkBank';
import Earnings from '@views/Earnings/Earnings';
import History from '@views/Earnings/History/History';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { uiColors } from '@utils/colors';

const EarningsStack = createNativeStackNavigator();

const EarningsStackScreen = () => {
  return (
    <EarningsStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: uiColors.black.dark },
      }}
    >
      <EarningsStack.Screen name="Earnings" component={Earnings} />
      <EarningsStack.Screen
        name="History"
        component={History}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <CustomHeader
              title="History"
              onBackPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <EarningsStack.Screen
        name="Withdraw"
        component={Withdraw}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <CustomHeader
              title="Withdraw"
              onBackPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <EarningsStack.Screen
        name="AddCredit"
        component={AddCredit}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <CustomHeader
              title="Add a credit card"
              onBackPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <EarningsStack.Screen
        name="LinkBank"
        component={LinkBank}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <CustomHeader
              title="Link a bank account"
              onBackPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <EarningsStack.Screen
        name="NextStepPayment"
        component={NextStepPayment}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <CustomHeader
              title="NextStepPayment"
              onBackPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      {/* 
      
      NextStepPayment
      */}
    </EarningsStack.Navigator>
  );
};

export default EarningsStackScreen;
