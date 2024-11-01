import React from 'react';
import useMethod from './method';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MastercardLogo from '@assets/Icons/MastercardLogo.svg';
import RoundCheckbox from '@components/Checkbox/RoundCheckbox';
import VisaLogo from '@assets/Icons/VisaLogo.svg';
import Buttons from '@components/Buttons/Buttons';
import Icon from 'react-native-vector-icons/Feather';
import data from './dummy';
import Card from '@components/Cards/Card';
import s from './styles';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import { uiColors } from '@utils/colors';

const Withdraw = () => {
  const { navigator, selectedId, handleSelect } = useMethod();
  return (
    <SafeAreaView style={s.container}>
      <Card
        justifyContent={'flex-start'}
        callback={() => navigator.navigate('AddCredit')}
        gap={4}
      >
        <Icon
          name="plus"
          size={14}
          color={uiColors.green.normal}
          style={{ marginTop: 2 }}
        />
        <Text style={s.addCardText}> Link an eligible debit card</Text>
      </Card>
      <Card
        justifyContent={'flex-start'}
        callback={() => navigator.navigate('LinkBank')}
        gap={4}
        marginTop={8}
      >
        <Icon
          name="plus"
          size={14}
          color={uiColors.green.normal}
          style={{ marginTop: 2 }}
        />
        <Text style={s.addCardText}> Link a bank account</Text>
      </Card>
      <Text style={{ ...s.addCardText, marginTop: 45, marginBottom: 8 }}>
        Accounts
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <Card>
            <View style={s.cardDetailsAndTypeContainer}>
              {item.cardType === 'Mastercard' ? (
                <MastercardLogo width={24} height={24} />
              ) : item.cardType === 'Visa' ? (
                <VisaLogo width={24} height={24} />
              ) : (
                <FontAwesomeIcon
                  name={'bank'}
                  size={24}
                  color={uiColors.white.normal}
                />
              )}
              <View style={s.cardDetailsContainer}>
                <Text style={s.addCardText}>{item.bankName}</Text>

                <Text style={s.addCardText}>
                  {item.accountType} {item.cardNumber}
                </Text>
              </View>
            </View>
            <RoundCheckbox
              id={item.id}
              selectedId={selectedId}
              onSelect={handleSelect}
            />
          </Card>
        )}
      />
      <Buttons
        text="Next"
        callback={() => navigator.navigate('NextStepPayment')}
        isDisabled={!selectedId}
      />
    </SafeAreaView>
  );
};

export default Withdraw;
