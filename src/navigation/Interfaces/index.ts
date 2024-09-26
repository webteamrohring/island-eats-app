import {LocationType, OrderStatus, UserType} from '@interfaces';

export type AuthStackParamList = {
  Login: object;
};

export type MainStackParamList = {
  Dashboard: object;
  Orders: {orderStatus?: OrderStatus[] | OrderStatus};
  Order: {id: string; initialPage?: number};
  ChatMessages: {id: string; sender: UserType | null};
  DeliveryDirections: {deliveryCoordinates: LocationType | undefined};
  OrderSubstitutionCreation: {id: string; itemId: string};
};
