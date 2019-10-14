import { handleActions } from 'redux-actions';
import {
  openModal,
  closeModal,
} from '../actions/system';

export const getInitialState = () => ({});

export const modals = handleActions(
  {
    [openModal]: (state, { payload: modalId }) => ({
      ...state,
      [modalId]: true,
    }),
    [closeModal]: (state, { payload: modalId }) => ({
      ...state,
      [modalId]: false,
    }),
  },
  getInitialState()
);
