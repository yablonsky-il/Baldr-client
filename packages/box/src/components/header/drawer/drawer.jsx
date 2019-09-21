import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { IconMenu } from '../../icons/icons-drawer/icon-menu';
import { IconStatistic } from '../../icons/icons-drawer/icon-statistic';
import { IconHome } from '../../icons/icons-drawer/icon-home';
import { IconWebChat } from '../../icons/icons-drawer/icon-web-chat';

import './drawer.scss';

const listItems = [
  { item: 'Home', icon: <IconHome className="fill-gray" />, href: '/' },
  { item: 'MacroEcomoic statistic', icon: <IconStatistic className="fill-gray" />, href: '/macro-economic/stocks' },
  { item: 'WebChat', icon: <IconWebChat className="fill-gray" />, href: '/web-chat' },
];

export const DrawerUI = () => {
  const [isOpen, setState] = React.useState(false);

  const toggleDrawer = open => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
      <span className="cursor-pointer" onClick={toggleDrawer(true)}>
        <IconMenu className="fill-gray" />
      </span>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        {sideList('left')}
      </Drawer>
    </div>
  )
}

export const DrawerMenu = memo(DrawerUI);
