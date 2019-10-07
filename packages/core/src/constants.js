const { NODE_ENV } = process.env;

export const ENV = {
  DEVELOPMENT: 'development',
  PRODUCITON: 'production',
};

export const API_URL = NODE_ENV === ENV.DEVELOPMENT ? '/proxy/api' : '/api';
export const LOCAL_SOCKET_URL = 'http://localhost:3005';
export const REMOTE_SOCKET_URL = '';

export const FORM = {
  NAME: 'sign-up-form-name',
  SURNAME: 'sign-up-form-surname',
  EMAIL: 'sign-up-form-email',
  PASSWORD: 'sign-up-form-password',
};

export const SIGN_UP_STATUSES = {
  ERROR: 0,
  SUCCESS: 1,
};

export const SIGN_IN_STATUSES = {
  ERROR: 0,
  SUCCESS: 1,
};
