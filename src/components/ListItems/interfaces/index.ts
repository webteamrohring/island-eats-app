import {
  LocationType,
  MessageTypeEnum,
  OrderItemStatus,
  OrderStatus,
  SubstitutionStatus,
  UserType,
} from '@interfaces';

export type OrderItemProps = {
  _id: string;
  orderId: string;
  status: OrderStatus;
  customer: UserType;
  orderItems: OrderItemType[];
  card: CardType;
  total: number;
};

export type OrderStatusDetailsType = {
  status: OrderStatus;
  createdAt: Date | null;
};

export type OrderType = {
  _id: string;
  orderId: string;
  orderStatus: OrderStatusDetailsType[];
  status: OrderStatus;
  address: OrderAddressType;
  customer: UserType;
  shopper: UserType;
  orderItems: OrderItemType[];
  orderSubstitutes: OrderSubstituteType[];
  card: CardType;
  cardType: CardType;
  deliveryDate: Date;
  time: string;
  instructions: string;
  rentalCompany: string;
  rentalPhone: string;
  reservationNum: string;
  tip: number;
  deliveryFee: number;
  handlingFee: number;
  subtotal: number;
  total: number;
  orderReceipts: string[];
  createdAt: Date;
};

export type OrderAddressType = {
  address: string;
  addressOptional: string;
  city: string;
  state: string;
  isPrimary: boolean;
  zipCode: string;
  location: LocationType;
};

export type OrderItemType = {
  _id: string;
  product: ProductType;
  substitute: SubstituteType;
  quantity: number;
  canSubstitute: boolean;
  status: OrderItemStatus;
};

export type OrderSubstituteType = {
  _id: string;
  substitute: ProductType;
  orderItem: OrderItemType;
  status: SubstitutionStatus;
};

export type AddressType = {
  address: string;
  addressOptional: string;
  city: string;
  state: string;
  zipCode: string;
  isPrimary: boolean;
};
export type ProductType = {
  _id: string;
  primaryImage: MediaType;
  name: string;
  description: string;
  price: number;
  category: CategoryType;
};

export type SubstituteType = {
  _id: string;
  status: SubstitutionStatus;
  substitute: ProductType;
};

export type CardType = {
  lastCardNumber: string;
  cardType: string;
};

export type CustomerOrderItemProps = {
  _id: string;
  product: ProductType;
  substitute: SubstituteType;
  quantity?: number;
  canSubstitute?: boolean;
  status?: OrderItemStatus;
  onMarkItem: (orderItemId: string, status?: OrderItemStatus) => Promise<void>;
};

export type MediaType = {
  uri: string;
};

export type CategoryType = {
  _id: string;
  name: string;
};

export type SubstitutionItemProps = {
  _id: string;
  orderItem: OrderItemType;
  substitute: ProductType;
  status?: SubstitutionStatus;
};

export type ChatItemProps = {
  _id: string;
  users: UserType[];
  metaData: ChatItemMetaDataType[];
  lastMessage: MessageItemProps;
  createdAt: Date;
  updatedAt: Date;
};

export type ChatItemMetaDataType = {
  _id: string;
  user: string;
  unreadCount: number;
};

export type MessageItemProps = {
  _id: string;
  message: string;
  messageType: MessageTypeEnum;
  user: UserType;
  recipient: string;
  createdAt: string;
  updatedAt: string;
};
