import React, {useEffect, useState} from 'react';

import {Text, View} from 'react-native';
import {Colors, Fonts} from '@styles';

import moment from 'moment';
import CollapsibleInput from '@components/Inputs/CollapsibleInput.tsx';

import {ListItemType} from '@interfaces';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {momentCalendarConfig} from '@helpers';
import {DatePickerView, Modal} from '@ant-design/react-native';
import SimpleBtn from '@components/Buttons/SimpleBtn.tsx';

export default ({onChange}: any) => {
  const dateOptions: ListItemType[] = [
    {
      text: moment().subtract(2, 'day').calendar(null, momentCalendarConfig),
      value: moment().subtract(2, 'day').format('YYYY-MM-DD'),
    },
    {
      text: 'yesterday',
      value: moment().subtract(1, 'day').format('YYYY-MM-DD'),
    },
    {
      text: 'today',
      value: moment().format('YYYY-MM-DD'),
    },
    {
      text: 'tomorrow',
      value: moment().add(1, 'day').format('YYYY-MM-DD'),
    },
    {
      text: moment().add(2, 'day').calendar(null, momentCalendarConfig),
      value: moment().add(2, 'day').format('YYYY-MM-DD'),
    },
    {
      text: 'Custom Date',
      value: 'CUSTOM',
    },
  ];

  const [customDate, setCustomDate] = useState(moment().format('YYYY-MM-DD'));
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const onDateChange = (value: string | string[]) => {
    if (value !== 'CUSTOM') {
      if (!Array.isArray(value)) {
        setDate(value);
      }
    } else {
      setDatePickerVisible(true);
    }
  };

  const labelRenderer = (type: string, data: number) => {
    switch (type) {
      case 'month':
        return moment(data, 'MM').format('MMM');
      default:
        return data;
    }
  };

  useEffect(() => {
    onChange(date);
  }, [date]);

  return (
    <>
      <View
        style={{
          marginTop: 27,
          marginBottom: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2,
        }}>
        <Text
          style={[
            Fonts.body3,
            {color: Colors.text, marginTop: responsiveHeight(1.6)},
          ]}>
          {moment(date).format('dddd, MMM DD')}
        </Text>
        <CollapsibleInput
          width={responsiveWidth(30)}
          list={dateOptions}
          value={moment(date).calendar(null, momentCalendarConfig)}
          onChange={onDateChange}
          name="date"
          placeholder="Date"
          floating
        />
      </View>
      <Modal visible={datePickerVisible} transparent>
        <View style={{gap: 15}}>
          <Text style={[Fonts.header2]}>Select Date</Text>
          <DatePickerView
            defaultValue={new Date()}
            onChange={(val: Date) =>
              setCustomDate(moment(val).format('YYYY-MM-DD'))
            }
            precision="day"
            renderLabel={labelRenderer}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              gap: 20,
            }}>
            <SimpleBtn
              onPress={() => {
                setDatePickerVisible(false);
              }}
              title="Cancel"
              bgColor={Colors.red}
              containerStyle={{width: '50%'}}
            />
            <SimpleBtn
              onPress={() => {
                setDate(customDate);
                setDatePickerVisible(false);
              }}
              bgColor={Colors.primary}
              title="Continue"
              containerStyle={{width: '50%'}}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
