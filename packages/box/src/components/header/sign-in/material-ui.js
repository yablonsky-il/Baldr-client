import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { FORM } from '../../../constants';

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
    className: 'sign-in-form-input',
    id: FORM.EMAIL,
    label: 'Email',
    placeholder: 'Your email',
    margin: 'normal',
    type: 'text',
    autocomplete: 'username',
  },
  {
    className: 'sign-in-form-input',
    id: FORM.PASSWORD,
    label: 'Password',
    placeholder: 'Your password',
    margin: 'normal',
    type: 'password',
    autocomplete: 'current-password',
  },
];
