import React, { memo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';

import './profile.scss';

const ProfileUI = ({
  className,
  avatarClassName,
  userProfile: {
    name,
    surname,
    email,
    randomAvatar,
  },
  signOut,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className={className}>
      <div className="font-weight-bold mr-2 profile-user">{name}</div>
      <div className="font-weight-bold mr-2 profile-user">{surname}</div>
      <div
        className={classNames('position-relative profile-button', avatarClassName)}
        role="button"
        onClick={handleClick}
        tabIndex={0}
        onKeyPress={handleClick}
      >
        <Avatar
          alt={`user:${email}`}
          // TODO: src="/api/img/profile/avatar.jpg"
          src={`https://api.adorable.io/avatars/200/${randomAvatar}.png`}
          className="profile-avatar"
        />
      </div>
      <Menu
        className="profile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={() => signOut()}>
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  );
};

export const Profile = memo(ProfileUI);
