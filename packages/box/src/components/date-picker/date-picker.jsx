import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const DatePicker = (props) => {
  const { setDate } = props;

  return (
    <KeyboardDatePicker
      {...props}
    />
  );
}
