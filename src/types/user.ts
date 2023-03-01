import { EntityMeta } from './entity';

export type NewUser = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

export type User = NewUser & EntityMeta;

export type LoginUser = Omit<NewUser, 'first_name' | 'last_name'>;

export type ApplyUser = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: number;
  has_drivers_license: boolean;
  user_id: number;
};
