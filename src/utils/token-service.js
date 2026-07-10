import { clearCredendials } from "@/store/auth";
import { useDispatch } from "react-redux";

let accessToken = null;

export const setAccessToken = (token) => {
  console.log(token, "utility service token")
  accessToken = token;
};

export const getAccessToken = () => accessToken;

export const clearAccessToken = () => {
  const dispatch = useDispatch()
  accessToken = null;
  dispatch(clearCredendials())
  window.location.href = "/login";
};