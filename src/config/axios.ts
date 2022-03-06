import axiosMain from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { getLocalStorage } from 'utils';

const axiosBase = axiosMain.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const axios = applyCaseMiddleware(axiosBase);

const requestHandler = (request) => {
  // NOTE: using any type because of JWT token problem if using AxiosRequestConfig<any>.
  const authToken = getLocalStorage('token', null);
  request.headers.Authorization = `Bearer ${authToken}`;
  return request;
};

axios.interceptors.request.use((request) => requestHandler(request));

export { axios };
