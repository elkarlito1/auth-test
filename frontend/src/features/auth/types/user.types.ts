export enum UserRole {
  Regular = "REGURAL",
  Admin = "ADMIN",
}

export enum EnumAuthMethod {
  LOCAL = "LOCAL",
  Google = "GOOGLE",
  Yandex = "YANDEX",
}
export interface IAccount {
  id: string;
  createdAt: string;
  updateAt: string;
  type: string;
  provider: string;
  refreshToken: string;
  accessToken: string;
  expiresAt: number;
  userId: string;
}
export interface IUser {
  id: string;
  createdAt: string;
  updateAt: string;
  email: string;
  password: string;
  displayName: string;
  picture: string;
  role: UserRole;
  isVerified: string;
  isTwoFactorEnabled: boolean;
  method: EnumAuthMethod;
  accounts: IAccount[];
}
