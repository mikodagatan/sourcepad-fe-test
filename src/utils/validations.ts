export const alphaValidation = {
  value: /^[A-Za-z\s]*$/,
  message: 'This should only contain letters',
};

export const alphaNumericValidation = {
  value: /^[A-Za-z0-9\s]*$/,
  message: 'This should contain letters and numbers only',
};

export const numericValidation = {
  value: /^[A-Za-z0-9\s]*$/,
  message: 'This should only contain numbers',
};

export const emailValidation = {
  value:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: 'The email format is incorrect',
};

export const passwordValidation = {
  value:
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&?-])[a-zA-Z0-9!#$%&?-]{8,20}$/,
  message:
    'Minimum eight characters, at least one letter, one number and one special character',
};

export const phoneNumberValidation = {
  value: /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  message: 'Invalid phone number',
};

export const minLengthValidation = (value: number) => {
  return {
    value: value,
    message: `should be at least ${value} characters`,
  };
};

export const maxLengthValidation = (value: number) => {
  return {
    value: value,
    message: `should be at most ${value} characters`,
  };
};
