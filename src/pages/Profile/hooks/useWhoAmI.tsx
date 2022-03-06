import * as React from 'react';
import { axiosAuth } from 'config';
import { IUser } from 'services';

const useWhoAmI = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string>();
};

export default useWhoAmI;
