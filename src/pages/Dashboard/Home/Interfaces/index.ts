import {StyleProp, ViewStyle} from 'react-native';
import {OrderStatus} from '@interfaces';

export type OrderStatusButtonsProps = {
  style?: StyleProp<ViewStyle>;
};

export type OrderStatusButtonProps = {
  orderStatus?: OrderStatus[] | OrderStatus;
  count: number;
  text: string;
  onPress?: () => void;
  style?: ViewStyle;
};
