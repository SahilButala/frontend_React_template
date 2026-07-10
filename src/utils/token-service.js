
let accessToken = null;

export const setAccessToken = (token) => {
  console.log(token , "utility service token")
  accessToken = token;
};

export const getAccessToken = () => accessToken;

export const clearAccessToken = () => {
  accessToken = null;
};