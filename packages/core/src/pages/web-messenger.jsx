import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllUsers } from '../actions/fetch-all-users';

export const WebMessengerCore = ({ children }) => {
  const dispatch = useDispatch();
  const webMessengerData = useSelector(({
    webMessenger: {
      isInProgress,
      usersList,
    },
  }) => ({ isInProgress, usersList }));

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return children(webMessengerData);
};

export const WebMessenger = WebMessengerCore;
