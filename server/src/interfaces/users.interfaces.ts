export interface User {
  id?: string;
  name?: string;
  email?: string;
  googleId?: string;
  facebookId?: string;
  userInfo?: string;
  profilePictureUrl?: string;
  password?: string;
  role?: string;
  status?: string;
  label?: string;
  isBanned?: boolean;
  banEnd?: number;
}
