import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { FORM } from 'core/constants';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#a08e8e',
    },
  },
})(TextField);

export const fields = [
  {
    className: 'sign-up-form-input',
    id: FORM.NAME,
    label: 'Name',
    placeholder: 'Your name',
    margin: 'normal',
    type: 'text',
    title: 'Name should be more 2 characters',
  },
  {
    className: 'sign-up-form-input',
    id: FORM.SURNAME,
    label: 'Surname',
    placeholder: 'Your surname',
    margin: 'normal',
    type: 'text',
    title: 'Surname should be more 2 characters',
  },
  {
    className: 'sign-up-form-input',
    id: FORM.EMAIL,
    label: 'Email',
    placeholder: 'Your email',
    margin: 'normal',
    type: 'text',
    title: 'Enter your email',
  },
  {
    className: 'sign-up-form-input',
    id: FORM.PASSWORD,
    label: 'Password',
    placeholder: 'Your password',
    margin: 'normal',
    type: 'password',
    title: 'Password should be from 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character',
  },
];
