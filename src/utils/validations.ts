export const emailValidation = {
  value:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: 'The email format is incorrect',
};

export const passwordValidation = {
  value: /^(?=.*\d)(?=.*[!@#$%^&*-=])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  message:
    'Minimum eight characters, at least one letter, one number and one special character',
};