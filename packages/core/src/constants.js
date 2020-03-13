const { NODE_ENV } = process.env;

export const ENV = {
  DEVELOPMENT: 'development',
  PRODUCITON: 'production',
};

export const isDevelopmentEnv = NODE_ENV === ENV.DEVELOPMENT;
export const API_PATH = isDevelopmentEnv ? 'http://localhost:3005/api' : 'https://heimdall-server.herokuapp.com/api';
export const SOCKET_URL = isDevelopmentEnv ? 'http://localhost:3005' : 'https://heimdall-server.herokuapp.com';

export const HTTP_CODES = {
  OK: 200,
  MOVED_PERMANENTLY: 301,
  BAD_REQUEST: 400,
  HTTP_CODE_NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export const SNACKBAR_VARIANTS = {
  DEFAULT: 'default',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
};

export const ERRORS = {
  UNDEFINED: 'UNDEFINED',
  AUTH_ERROR: 'AUTH_ERROR',
};

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
