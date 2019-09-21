import React, { memo } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { sendRegistrationData as sendRegistrationDataAction } from '../../actions/sign-up';
import { sendAuthenticationData as sendAuthenticationDataAction } from '../../actions/sign-in';
import { signOut as signOutAction } from '../../actions/sign-out';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';
import { DrawerMenu } from './drawer/drawer';

import './header.scss';

const HeaderUI = ({
  signUp,
  signIn,
  userProfile,
  sendRegistrationData,
  sendAuthenticationData,
  signOut,
}) => (
  <header className="w-100 d-flex align-items-center justify-content-between header">
    <div className="d-flex align-items-center">
      <DrawerMenu />
      <a href="/" className="h2 m-0 ml-3 header-title">#</a>
    </div>
    {!userProfile.isAuthorized
      ? (
        <div className="d-flex">
          <SignIn
            signIn={signIn}
            sendAuthenticationData={sendAuthenticationData}
          />
          <SignUp
            signUp={signUp}
            sendRegistrationData={sendRegistrationData}
          />
        </div>
      ) : (
        <Profile
          userProfile={userProfile}
          signOut={signOut}
        />
      )}
  </header>
);

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
