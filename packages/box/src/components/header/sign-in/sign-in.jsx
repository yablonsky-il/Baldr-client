import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import * as R from 'ramda';

import { withModalActions } from 'core/hocs/with-modal-actions';
import { validateSignIn, updateForm, sendForm } from 'core/helpers/forms';
import { FORM, MODALS_ID } from 'core/constants';

import { ModalSignIn } from '../../modals/modal-sign-in/modal-sign-in';

import './sign-in.scss';

const { SIGN_IN_MODAL } = MODALS_ID;

export class SignInUI extends PureComponent {
  state = {
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

  onOpen = () => {
    const { openModal } = this.props;

    openModal(SIGN_IN_MODAL);
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
    const { sendAuthenticationData } = this.props;
    const validationResult = validateSignIn(formState);

    this.setState(prevState => ({
      ...prevState,
      formState: updateForm(validationResult, formState),
    }), () => sendForm(sendAuthenticationData, formState)(R.values(validationResult)));
  }

  render() {
    const { formState } = this.state;
    const {
      className,
      signIn: { isInProgress, message },
    } = this.props;

    return (
      <div className={className}>
        <Button onClick={this.onOpen} variant="contained">
          Sign In
        </Button>
        <ModalSignIn
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

export const SignIn = withModalActions(SignInUI);
