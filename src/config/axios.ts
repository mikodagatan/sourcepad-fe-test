import axiosMain from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { getLocalStorage } from 'utils';

const axiosBase = axiosMain.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const axios = applyCaseMiddleware(axiosBase);

const axiosAuth = () => {
  const instance = axiosBase;
  const authToken = getLocalStorage('token', null);
  console.log('axios authToken', authToken);

  instance.interceptors.request.use((request) => {
    if (!authToken) return request;

    if (!request.headers) return request;

    console.log('changing auth bearer');

    request.headers.Authorization = `Bearer ${authToken}`;
    return request;
  });

  return instance;
};

export { axios, axiosAuth };
