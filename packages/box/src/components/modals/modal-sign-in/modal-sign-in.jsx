import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as R from 'ramda';

import { MODALS_ID } from 'core/constants';

import { ModalWindow } from '../../modal-window/modal-window';
import { CssTextField, fields } from './material-ui';

const { SIGN_IN_MODAL } = MODALS_ID;

export const ModalSignIn = ({
  isInProgress,
  formState,
  message,
  changeFormState,
  sendFormValues,
}) => (
  <ModalWindow
    className="d-flex justify-content-center align-items-center modal-sign-in"
    coreProps={{ id: SIGN_IN_MODAL }}
    id={SIGN_IN_MODAL}
  >
    <div className="p-0 sign-in-content">
      <form className="w-100 d-flex flex-column p-4 rounded modal-form sign-in-form">
        {fields.map(({
          className, id, label, placeholder, margin, type, autocomplete,
        }) => {
          const isValid = formState[id].validation === 0;

          return (
            <CssTextField
              id={id}
              key={id}
              type={type}
              margin={margin}
              className={className}
              placeholder={placeholder}
              autoComplete={autocomplete}
              label={isValid ? 'Error' : label}
              error={isValid ? R.T() : R.F()}
              onChange={changeFormState}
            />
          );
        })}
        <Button
          className="mt-3"
          variant="contained"
          onClick={sendFormValues}
        >
          Send
        </Button>
        {isInProgress && <LinearProgress color="secondary" />}
        {!!message && <p className="m-0 mt-2 text-danger">{message}</p>}
      </form>
    </div>
  </ModalWindow>
);

ModalSignIn.propTypes = {
  isInProgress: PropTypes.bool.isRequired,
  formState: PropTypes.shape({}).isRequired,
  message: PropTypes.string,
  changeFormState: PropTypes.func.isRequired,
  sendFormValues: PropTypes.func.isRequired,
};

ModalSignIn.defaultProps = {
  message: null,
};
