export const checkOnError = (touched?: boolean, error?: string) => {
  if (touched && error) {
    return true;
  } else {
    return false;
  }
};
