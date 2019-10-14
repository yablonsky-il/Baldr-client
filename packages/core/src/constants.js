const { NODE_ENV } = process.env;

export const ENV = {
  DEVELOPMENT: 'development',
  PRODUCITON: 'production',
};

const isDevelopmentEnv = NODE_ENV === ENV.DEVELOPMENT;

export const API_PATH = isDevelopmentEnv ? '/proxy/api' : '/api';
export const SOCKET_URL = isDevelopmentEnv ? 'http://localhost:3005' : 'https://heimdall-server.herokuapp.com';

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

export const MODALS_ID = {
  SIGN_IN_MODAL: 'sign-in-modal',
  SIGN_UP_MODAL: 'sign-up-modal',
};

