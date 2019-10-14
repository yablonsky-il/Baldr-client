import React from 'react';

import { withCore } from 'core/hocs/with-core-component';
import { Header as HeaderCore } from 'core/components/header/header';

import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';
import { DrawerMenu } from '../drawer/drawer';

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
      <a href="/" className="h2 m-0 ml-3 header-title">Pet Project</a>
    </div>
    {!userProfile.isAuthorized
      ? (
        <div className="d-none d-md-flex">
          <SignIn
            className="mr-1 mr-sm-3"
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
          className="d-flex align-items-center profile"
          userProfile={userProfile}
          signOut={signOut}
        />
      )}
  </header>
);

export const Header = withCore(HeaderCore, HeaderUI);
