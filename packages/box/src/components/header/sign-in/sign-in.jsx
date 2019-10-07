import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as R from 'ramda';

import { validateSignIn, updateForm, sendForm } from 'core/helpers/forms';
import { FORM } from 'core/constants';

import { CssTextField, fields } from './material-ui';

import './sign-in.scss';

export class SignIn extends Component {
  state = {
    isOpen: false,
    formState: {
      [FORM.EMAIL]: {
        value: '',
        validation: 1,
      },
      [FORM.PASSWORD]: {
        value: '',
        validation: 1,
      },
    },
  };

  toggle = () => this.setState(prevState => ({
    ...prevState,
    isOpen: !prevState.isOpen,
  }));

  handleChange = (e) => {
    e.persist();

    this.setState(prevState => ({
      ...prevState,
      formState: {
        ...prevState.formState,
        [e.target.id]: {
          ...prevState.formState[e.target.id],
          value: e.target.value,
        },
      },
    }));
  }

  sendFormValues = () => {
    const { formState } = this.state;
    const { sendAuthenticationData } = this.props;
    const validationResult = validateSignIn(formState);

    this.setState(prevState => ({
      ...prevState,
      formState: updateForm(validationResult, formState),
    }), () => sendForm(sendAuthenticationData, formState)(R.values(validationResult)));
  }

  render() {
    const { isOpen, formState } = this.state;
    const {
      signIn: { isInProgress, message },
    } = this.props;

    return (
      <div className="mr-3">
        <Button onClick={this.toggle} variant="contained">
          Sign In
        </Button>
        <Dialog
          className="modal-sign-in"
          onClose={this.toggle}
          open={isOpen}
        >
          <DialogContent className="w-100 p-0 sign-in-content">
            <form className="d-flex h-100 flex-column modal-form sign-in-form">
              {fields.map(({
                className, id, label, placeholder, margin, type, autocomplete,
              }) => (
                <CssTextField
                  id={id}
                  key={id}
                  type={type}
                  margin={margin}
                  className={className}
                  placeholder={placeholder}
                  autoComplete={autocomplete}
                  label={formState[id].validation === 0 ? 'Error' : label}
                  error={formState[id].validation === 0 ? Boolean(1) : false}
                  onChange={this.handleChange}
                />
              ))}
              <Button
                className="mt-3"
                variant="contained"
                onClick={this.sendFormValues}
              >
                Send
              </Button>
              {isInProgress && <LinearProgress color="secondary" />}
              {!!message && <p className="m-0 mt-2 text-danger">{message}</p>}
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
