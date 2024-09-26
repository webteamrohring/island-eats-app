import React from 'react';
import {Text, View} from 'react-native';
import {Colors, Fonts} from '@styles';
import {centerContent} from '@styles/MainStyles.ts';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {IconOutline} from '@ant-design/icons-react-native';

export default ({loading}: any) => {
  return (
    <>
      {!loading && (
        <View
          style={[
            {
              flex: 1,
              height: responsiveHeight(35),
              gap: 10,
            },
            centerContent,
          ]}>
          <IconOutline name="inbox" color={Colors.grayText6} size={40} />
          <Text style={[Fonts.subHeader2, {color: Colors.grayText6}]}>
            No Orders
          </Text>
        </View>
      )}
    </>
  );
};
