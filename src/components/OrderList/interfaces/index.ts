import {OrderStatus} from '@interfaces';
import {NativeSyntheticEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {NativeScrollEvent} from 'react-native/Libraries/Components/ScrollView/ScrollView';
import {StyleProp, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export type OrderListProps = {
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  keyPrefix: string;
  date?: string;
  orderStatus?: OrderStatus[] | OrderStatus;
  search?: string;
  isAnimated: boolean;
  style?: StyleProp<ViewStyle>;

  expandable?: boolean;
};
