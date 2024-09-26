import {PropsWithChildren} from 'react';
import {Colors} from '@styles';
import {View} from 'react-native';
import {DetailCardProps} from '@pages/Order/Interfaces';

export default ({children, style}: PropsWithChildren<DetailCardProps>) => (
  <View
    style={[
      {
        backgroundColor: Colors.white,
        paddingVertical: 33,
        paddingHorizontal: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border3,
        marginTop: 15,
      },
      style,
    ]}>
    {children}
  </View>
);
