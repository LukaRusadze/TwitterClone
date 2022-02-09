export interface PasswordRoute {
  username?: string;
}

export type RootStackParamList = {
  Start: undefined;
  Register: undefined;
  Login: undefined;
  Password: PasswordRoute;
};
