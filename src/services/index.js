import axiosInstance from "../api/index";
import backendpaths from "../config/backend-route-path.js";

// auth services
export async function LoginUserService(formdata) {
  const { data } = await axiosInstance.post(backendpaths.auth.login, {
    ...formdata,
  });
  return data;
}


