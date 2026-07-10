const getErrorMessage = (error) => {
  return (
    error?.message ||
    error?.response?.data?.message ||
    error?.data?.message ||
    error?.payload?.message ||
    "Something went wrong"
  );
};

export default getErrorMessage;