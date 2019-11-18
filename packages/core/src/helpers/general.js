import ReactDOM from 'react-dom';
import { HTTP_CODES } from '../constants';

export const canUseDOM = () => !!(
  (typeof window !== 'undefined' && window.document && window.document.createElement)
);

export function createUniversalPortal(children, selector) {
  if (!canUseDOM()) {
    return null;
  }

  return ReactDOM.createPortal(children, document.querySelector(selector));
}

export const getStatusCode = ({ is404 }) => {
  if (is404) {
    return HTTP_CODES.HTTP_CODE_NOT_FOUND;
  }

  return HTTP_CODES.OK;
};
