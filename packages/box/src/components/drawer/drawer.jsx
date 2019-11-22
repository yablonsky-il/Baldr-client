import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { withCore } from 'core/hocs/with-core-component';
import { Header as HeaderCore } from 'core/components/header/header';

import { IconMenu } from '../icons/icons-drawer/icon-menu';
import { IconStatistic } from '../icons/icons-drawer/icon-statistic';
import { IconHome } from '../icons/icons-drawer/icon-home';
import { IconWebMessenger } from '../icons/icons-drawer/icon-web-messenger';
import { SignIn } from '../header/sign-in/sign-in';
import { SignUp } from '../header/sign-up/sign-up';
import { Profile } from '../header/profile/profile';

import './drawer.scss';

const listItems = [
  { item: 'Home', icon: <IconHome className="fill-gray" />, href: '/' },
  { item: 'MEconomic statistic', icon: <IconStatistic className="fill-gray" />, href: '/macro-economic/stocks' },
  { item: 'Web Messenger', icon: <IconWebMessenger className="fill-gray" />, href: '/web-messenger' },
];

export const DrawerUI = ({
  signUp,
  signIn,
  userProfile,
  sendRegistrationData,
  sendAuthenticationData,
  signOut,
}) => {
  const [isOpen, setState] = React.useState(false);

  const toggleDrawer = open => (event) => {
    const closest = event.target.closest('.profile-drawer');

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift') || closest) {
      return;
    }

    setState(open);
  };

  const sideList = () => (
    <div
      className="drawer"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {!userProfile.isAuthorized
        ? (
          <div className="d-flex d-md-none justify-content-around mt-1">
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
            className="d-flex justify-content-end align-items-center profile-drawer"
            avatarClassName="mr-1"
            userProfile={userProfile}
            signOut={signOut}
          />
        )}
      <List>
        {listItems.map(({ item, icon, href }) => (
          <NavLink key={item} to={href}>
            <ListItem button key={item}>
              <ListItemIcon className="drawer-list-item mr-3">
                {icon}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <div className="drawer">
      <span
        className="cursor-pointer"
        onClick={toggleDrawer(true)}
        onKeyPress={toggleDrawer(true)}
        role="button"
        tabIndex="0"
      >
        <IconMenu className="fill-gray" />
      </span>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
};

export const DrawerMenu = memo(withCore(HeaderCore, DrawerUI));
