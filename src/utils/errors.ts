import { join, map } from 'lodash';

export const getErrors = (errors: string[] | undefined) => {
  if (!errors) return null;

  return join(errors, ', ');
};

export const authErrors = {
  Unauthorized: 'Invalid email or password.',
};
