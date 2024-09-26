import {TextStyle, ViewStyle} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import {
  AddressType,
  CategoryType,
  ChatItemProps,
  MessageItemProps,
  OrderSubstituteType,
  OrderType,
} from '@components/ListItems/interfaces';

export type UserType = {
  _id: string;
  profileImage?: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string | undefined;
  locationInfo?: LocationInfoType;
  userType: UserTypeEnum;
  addresses: AddressType[];
};

export type LocationInfoType = {
  device: string;
  location: LocationType;
  timestamp: Date;
};

export type LocationType = {
  latitude: number;
  longitude: number;
};

export type OrderStatsType = {
  orderPlaced: number;
  preparing: number;
  onDelivery: number;
  delivered: number;
};

export type OrderContextType = {
  orderStats: OrderStatsType;
  getOrderStats?: () => Promise<OrderStatsType>;
  getOrders?: (
    page: number,
    limit: number,
    date?: string | undefined,
    orderStatus?: OrderStatus[] | OrderStatus,
    search?: string | undefined,
  ) => Promise<OrderType[] | null>;
  getOrder?: (id: string) => Promise<OrderType | null>;
  getOrderSubstitutes?: (id: string) => Promise<OrderSubstituteType | null>;
  categories: CategoryType[];
  updateOrder?: (id: string | undefined, payload: object) => Promise<unknown>;
  orderId: string;
};

export type OrderStatsResponse = {
  message: string;
  stats: OrderStatsType;
};

export type ChatContextType = {
  getConversations?: (
    page: number,
    limit: number,
    search?: string | undefined,
  ) => Promise<ChatItemProps[] | null>;
  getConversationMessages?: (
    id: string,
    page: number,
    limit: number,
  ) => Promise<MessageItemProps[] | null>;
};

export type AppContextType = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  currentLocation: LocationType | null;
  showAlert: (arg0: string, arg1: string) => void;
};

export type ListItemType = {
  text: string;
  value: string;
};

export type SimpleBtnType = {
  title: string;
  disabled?: boolean;
  bgColor?: string;
  borderColor?: string;
  fontStyle?: TextStyle;
  textColor?: string;
  onPress?: () => void;
  width?: number;
  height?: number;
  borderRadius?: number;
  containerStyle?: ViewStyle;
  gap?: number;
  valid?: boolean;
  inverted?: boolean;
};

export enum UserTypeEnum {
  CUSTOMER = 'CUSTOMER',
  SHOPPER = 'SHOPPER',
  ADMIN = 'ADMIN',
}

export enum MessageTypeEnum {
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  IMAGE = 'IMAGE',
}

export enum OrderStatus {
  ORDER_PLACED = 'ORDER_PLACED',
  PREPARING = 'PREPARING',
  ITEM_PICKED = 'ITEM_PICKED',
  ON_DELIVERY = 'ON_DELIVERY',
  DELIVERED = 'DELIVERED',
  // CONFIRM_DELIVERY = 'CONFIRM_DELIVERY',
  // CANCELLED = 'CANCELLED',
}

export enum OrderItemStatus {
  PENDING = 'PENDING',
  PICKED = 'PICKED',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
  REJECTED = 'REJECTED',
}

export enum SubstitutionStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum SubstitutionType {
  PRODUCT = 'PRODUCT',
  CUSTOM = 'CUSTOM',
}

export enum PaymentMethod {
  MASTER_CARD = 'MASTER_CARD',
  VISA = 'VISA',
}

export type StatusDetail = Date | null;

export type OrderStatusDetailsProps = {
  statusDetails: StatusDetail[];
  status: OrderStatus;
};

export type InfoModalProps = {
  visible: boolean;
  title: string;
  body: string;
  onDismiss: () => void;
};
