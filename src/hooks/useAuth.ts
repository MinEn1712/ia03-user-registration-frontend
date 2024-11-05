import { useNavigate } from "@tanstack/react-router";
import { AuthInfo, signIn, signUp } from "../api/services/auth";
import { useMutation } from "@tanstack/react-query";

export const setAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      alert("User created");
      navigate({ to: "/login" });
    },
    onError: (error: any) => {
      alert("Error creating user");
    },
  });
};

export const useSignIn = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signIn,
    onSuccess: (response: AuthInfo) => {
      setAccessToken(response.accessToken);
      alert("User signed in");
      navigate({ to: "/" });
    },
    onError: (error: any) => {
      alert("Error signing in");
    },
  });
};
