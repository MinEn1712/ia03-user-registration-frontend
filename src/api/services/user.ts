import api from "../config";

type UserInfo = {
  username: string;
  email: string;
};

export const getUserInfo = async (): Promise<UserInfo> => {
  const response = await api.get<UserInfo>("user/info");
  return Promise.resolve(response.data);
};
