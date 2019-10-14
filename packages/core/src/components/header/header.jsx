import React, { memo } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { sendRegistrationData as sendRegistrationDataAction } from '../../actions/sign-up';
import { sendAuthenticationData as sendAuthenticationDataAction } from '../../actions/sign-in';
import { signOut as signOutAction } from '../../actions/sign-out';

const HeaderUI = ({
  signUp,
  signIn,
  signOut,
  userProfile,
  sendRegistrationData,
  sendAuthenticationData,
  children,
}) => children({
  signUp,
  signIn,
  signOut,
  userProfile,
  sendRegistrationData,
  sendAuthenticationData,
});

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
)(HeaderUI), (prevProps, nextProps) =>
  !R.equals(prevProps.userProfile, nextProps.userProfile));
