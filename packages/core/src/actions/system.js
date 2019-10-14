import { createActions } from 'redux-actions';

export const {
  openModal,
  closeModal,
  showNotifications,
  clearNotifications,
} = createActions(
  'OPEN_MODAL',
  'CLOSE_MODAL',
  'SHOW_NOTIFICATIONS',
  'HIDE_NOTIFICATIONS',
);
