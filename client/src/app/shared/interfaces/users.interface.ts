export interface User {
  id?: string;
  name: string;
  email: string;
  googleId?: string;
  facebookId?: string;
}

export interface UserReq extends User {
  password: string;
}
