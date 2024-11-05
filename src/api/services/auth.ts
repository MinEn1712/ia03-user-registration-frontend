import api from "../config";

export type AuthInfo = {
  accessToken: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
};

export type AccountIdentifier = {
  username: string;
  email: string;
  password: string;
};

type SignInParams = Pick<AccountIdentifier, "email" | "password">;
type SignUpParams = Pick<AccountIdentifier, "email" | "password">;

export const signIn = async (params: SignInParams): Promise<AuthInfo> => {
  const response = await api.post<AuthInfo>("user/login", params);
  return Promise.resolve(response.data);
};

export const signUp = async (params: SignUpParams): Promise<AuthInfo> => {
  const response = await api.post<AuthInfo>("user/register", params);
  return Promise.resolve(response.data);
};
