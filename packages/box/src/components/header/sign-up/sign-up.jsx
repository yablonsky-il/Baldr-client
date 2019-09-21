import React, { Component, memo } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as R from 'ramda';

import { IconMoreInfo } from '../../icons/icons-header/icon-more-info';
import { CssTextField, fields } from './material-ui';
import { validateSignUp } from '../../../helpers/sign-up';
import { FORM } from '../../../constants';

import './sign-up.scss';

export class SignUp extends Component {
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
    }
  };

  shouldComponentUpdate(nextProps) {
    console.log(this.props, 'prevProps from SignUp');
    console.log(nextProps, 'nextProps from SignUp');

    return true;
  }

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
    const { sendRegistrationData } = this.props;
    const validationResult = validateSignUp(formState);

    const updateForm = (value, key, obj) => ({
      ...obj[key],
      validation: validationResult[key],
    });

    this.setState(prevState => ({
      ...prevState,
      formState: R.mapObjIndexed(updateForm, formState),
    }), () => R.all(val => val === 1)(R.values(validationResult))
    && sendRegistrationData(R.map(formValue => formValue.value, formState)));
  }

  render() {
    const { isOpen, formState } = this.state;
    const { signUp: { isInProgress, message } } = this.props;

    return (
      <div className="mr-4">
        <Button onClick={this.toggle} variant="contained">
          Sign Up
        </Button>
        <Dialog
          className="modal-sign-up"
          onClose={this.toggle}
          open={isOpen}
        >
          <DialogContent className="p-0 sign-up-content">
            <form className="d-flex flex-column modal-form sign-up-form">
              {fields.map(({ className, id, label, placeholder, margin, type, title }) => {
                return (
                  <div key={id} className="d-flex align-items-end">
                    <CssTextField
                      id={id}
                      type={type}
                      margin={margin}
                      className={className}
                      placeholder={placeholder}
                      label={formState[id].validation === 0 ? 'Error' : label}
                      error={formState[id].validation === 0 ? Boolean(1) : false}
                      onChange={this.handleChange}
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
    )
  }
}
