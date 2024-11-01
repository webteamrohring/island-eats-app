import React from 'react';
import useMethod from './method';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Divider from '@components/Dividers/Dividers';
import Buttons from '@components/Buttons/Buttons';
import Card from '@components/Cards/Card';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { uiColors } from '@utils/colors';
import { data } from './dummy';
import s from './styles';

const Earnings = () => {
  const { navigator } = useMethod();
  return (
    <SafeAreaView style={s.container}>
      <Card flexDirection="column" gap={37} paddingTop={34}>
        <View>
          <Text style={s.earningsText}>$ 0.00</Text>
          <Text style={s.earningsSubText}>Today’s Earning</Text>
        </View>
        <View style={s.fullWidth}>
          <Divider />
          <View style={s.dividerRow}>
            <View style={s.iconRow}>
              <Icon
                name="swap"
                size={13}
                color={uiColors.green.normal}
                style={s.iconSpacing}
              />
              <Text style={s.earningsDetail}>15 deliveries</Text>
            </View>
            <View style={s.iconRow}>
              <FontistoIcon
                name="clock"
                size={13}
                color={uiColors.green.normal}
                style={s.iconSpacing}
              />
              <Text style={s.earningsDetail}>5h 45m</Text>
            </View>
          </View>
        </View>
      </Card>
      <View style={s.historyTitleContainer}>
        <Text style={s.historyTitle}>History</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <Card key={item.id}>
            <View style={s.orderDetailContainer}>
              <Text style={s.orderDetailLabel}>Order Details</Text>
              <Text style={s.orderDetailTitle}>{item.title}</Text>
              <View style={s.orderDateTimeRow}>
                <Text style={s.orderDetailDate}>{item.date}</Text>
                <Text style={s.orderDetailSeparator}> | </Text>
                <Text style={s.orderDetailDate}>{item.time}</Text>
              </View>
            </View>
            <Text style={s.orderDetailAmount}>+ ${item.amount.toFixed(2)}</Text>
          </Card>
        )}
      />
      <View style={{ height: 16 }} />
      <Buttons
        text="View all transaction"
        callback={() => navigator.navigate('History')}
      />
    </SafeAreaView>
  );
};

export default Earnings;
