interface User {
  name: string;
  email: string;
  mobile: string;
  gender: string;
}

interface Address {
  lineOne: string;
  lineTwo: string;
  pinCode: string;
}

interface UserProfile extends User {
  presentAddress: Address
  officeAddress: Address
}

interface Session {
  token: string;
}

export type { User, Address, UserProfile, Session }
