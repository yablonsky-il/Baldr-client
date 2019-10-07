import { createActions } from 'redux-actions';

export const {
  showNotifications,
  clearNotifications,
} = createActions(
  'SHOW_NOTIFICATIONS',
  'HIDE_NOTIFICATIONS',
);
