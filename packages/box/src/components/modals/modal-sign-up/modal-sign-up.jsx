import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import * as R from 'ramda';

import { MODALS_ID } from 'core/constants';

import { IconMoreInfo } from '../../icons/icons-header/icon-more-info';
import { ModalWindow } from '../../modal-window/modal-window';
import { CssTextField, fields } from './material-ui';

const { SIGN_UP_MODAL } = MODALS_ID;

export const ModalSignUp = ({
  isInProgress,
  formState,
  message,
  changeFormState,
  sendFormValues,
}) => (
  <ModalWindow
    className="d-flex justify-content-center align-items-center modal-sign-up"
    coreProps={{ id: SIGN_UP_MODAL }}
    id={SIGN_UP_MODAL}
  >
    <div className="p-0 sign-up-content">
      <form className="w-100 d-flex flex-column p-4 rounded modal-form sign-up-form">
        {fields.map(({
          className, id, label, placeholder, margin, type, title,
        }) => {
          const isValid = formState[id].validation === 0;

          return (
            <div key={id} className="d-flex align-items-end">
              <CssTextField
                id={id}
                type={type}
                margin={margin}
                className={className}
                placeholder={placeholder}
                label={isValid ? 'Error' : label}
                error={isValid ? R.T() : R.F()}
                onChange={changeFormState}
              />
              <Tooltip title={title} placement="top">
                <Button className="p-0 mb-2 ml-1 sign-up-form-info">
                  <IconMoreInfo />
                </Button>
              </Tooltip>
            </div>
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

ModalSignUp.propTypes = {
  isInProgress: PropTypes.bool.isRequired,
  formState: PropTypes.shape({}).isRequired,
  message: PropTypes.string,
  changeFormState: PropTypes.func.isRequired,
  sendFormValues: PropTypes.func.isRequired,
};

ModalSignUp.defaultProps = {
  message: null,
};