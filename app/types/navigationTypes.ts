export interface PasswordRoute {
  username?: string;
}

export type RootStackParamList = {
  Start: undefined;
  Login: undefined;
  Password: PasswordRoute;
};
