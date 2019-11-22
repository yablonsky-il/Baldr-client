import { createActions } from 'redux-actions';

export const {
  openModal,
  closeModal,
  // showNotification,
  // hideNotification,
} = createActions(
  'OPEN_MODAL',
  'CLOSE_MODAL',
  // 'SHOW_NOTIFICATION',
  // 'HIDE_NOTIFICATION',
);
