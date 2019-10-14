import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import * as R from 'ramda';

import { withModalActions } from 'core/hocs/with-modal-actions';
import { validateSignUp, updateForm, sendForm } from 'core/helpers/forms';
import { FORM, MODALS_ID } from 'core/constants';

import { ModalSignUp } from '../../modals/modal-sign-up/modal-sign-up';

import './sign-up.scss';

const { SIGN_UP_MODAL } = MODALS_ID;

export class SignUpUI extends Component {
  state = {
    isOpen: false,
    formState: {
      [FORM.NAME]: {
        value: '',
        validation: 1,
      },
      [FORM.SURNAME]: {
        value: '',
        validation: 1,
      },
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

  onOpen = () => {
    const { openModal } = this.props;

    openModal(SIGN_UP_MODAL);
  }

  changeFormState = (e) => {
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
    const { sendRegistrationData } = this.props;
    const validationResult = validateSignUp(formState);

    this.setState(prevState => ({
      ...prevState,
      formState: updateForm(validationResult, formState),
    }), () => sendForm(sendRegistrationData, formState)(R.values(validationResult)));
  }

  render() {
    const { formState } = this.state;
    const {
      className,
      signUp: { isInProgress, message },
    } = this.props;

    return (
      <div className={className}>
        <Button onClick={this.onOpen} variant="contained">
          Sign Up
        </Button>
        <ModalSignUp
          isInProgress={isInProgress}
          formState={formState}
          message={message}
          changeFormState={this.changeFormState}
          sendFormValues={this.sendFormValues}
        />
      </div>
    );
  }
}

export const SignUp = withModalActions(SignUpUI);
