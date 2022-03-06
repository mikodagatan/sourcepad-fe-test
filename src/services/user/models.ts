export interface IProfile {
  id: string;
  userId: string;
  address1: string;
  address2: string;
  city: string;
  zipCode: string;
  country: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IUser {
  email: string;
  password: string;
  profile?: IProfile;
}
