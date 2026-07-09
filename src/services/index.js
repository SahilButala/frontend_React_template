import axiousInstance from "../api/axious/index.js";
import backendpaths from "../config/backend-route-path.js";

// auth services
export async function RegisterUserService(formdata) {
  const { data } = await axiousInstance.post(backendpaths.auth.login, {
    ...formdata,
  });
  return data;
}