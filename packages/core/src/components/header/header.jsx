import React, { memo } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { sendRegistrationData as sendRegistrationDataAction } from '../../actions/sign-up';
import { sendAuthenticationData as sendAuthenticationDataAction } from '../../actions/sign-in';
import { signOut as signOutAction } from '../../actions/sign-out';

const HeaderUI = ({
  signUp,
  signIn,
  userProfile,
  sendRegistrationData,
  sendAuthenticationData,
  signOut,
  children,
}) => children({
  signUp,
  signIn,
  userProfile,
  sendRegistrationData,
  sendAuthenticationData,
  signOut,
})

const mapStateToProps = ({ signUp, signIn, userProfile }) => ({
  signUp,
  signIn,
  userProfile,
});

const mapDispatchToProps = {
  sendRegistrationData: sendRegistrationDataAction,
  sendAuthenticationData: sendAuthenticationDataAction,
  signOut: signOutAction,
};

export const Header = memo(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderUI), (prevProps, nextProps) => {
  console.log(prevProps, 'prevProps from Header');
  console.log(nextProps, 'nextProps from Header');

  return !R.equals(prevProps.userProfile, nextProps.userProfile);
});
