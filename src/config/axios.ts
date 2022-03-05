import axiosMain from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { getLocalStorage } from 'utils';

const axiosBase = axiosMain.create({ baseURL: process.env.REACT_APP_API_URL });

const axios = applyCaseMiddleware(axiosBase);

const axiosAuth = () => {
  const instance = axiosBase;

  instance.interceptors.request.use((config) => {
    const authToken = getLocalStorage('token', null);

    if (!config.headers) return console.log('No config headers for Auth');

    if (!authToken) return console.log('No Auth token');

    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  });

  return instance;
};

export { axios, axiosAuth };
