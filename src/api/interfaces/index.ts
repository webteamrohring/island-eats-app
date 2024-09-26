import {UserType} from '@interfaces';

export type SignInResponse = {
  refreshToken: string;
  token: string;
  user: UserType;
};
