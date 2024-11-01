import React from 'react';
import useMethod from './method';
import Divider from '@components/Dividers/Dividers';
import SmallButton from '@components/Buttons/SmallButton';
import s from './styles';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { data } from '../dummy';

const History = () => {
  const { navigator } = useMethod();
  return (
    <SafeAreaView style={s.container}>
      <View>
        <Text style={s.totalEarningsText}>Your Earnings</Text>
        <View style={s.totalEarningsContainer}>
          <Text style={s.totalEarningsNumber}>$ 1,300.23</Text>
          <SmallButton
            text="Withdraw"
            callback={() => navigator.navigate('Withdraw')}
          />
        </View>
      </View>
      <Divider thickness={7} style={{ marginTop: 29, marginBottom: 20 }} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        )}
        renderItem={({ item }) => (
          <View style={s.orderDetailContainer}>
            <Text style={s.orderDetailDate}>{item.time}</Text>
            <View style={s.orderTitleAndAmount}>
              <Text style={s.orderDetailTitle}>{item.title}</Text>
              <Text style={s.orderDetailAmount}>+ ${item.amount}</Text>
            </View>
            <Text style={s.orderDetailLocation}>{item.location}</Text>
            <Text style={s.orderDetailDate}>{item.paymentType}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default History;
