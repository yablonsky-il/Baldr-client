import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import * as R from 'ramda';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearProgress from '@material-ui/core/LinearProgress';

const routes = [
  { id: 1, label: 'stocks', href: '/macro-economic/stocks' },
  { id: 2, label: 'currency', href: '/macro-economic/currency' },
  { id: 3, label: 'inflation', href: '/macro-economic/inflation' },
  { id: 4, label: 'commodities', href: '/macro-economic/commodities' },
  { id: 5, label: 'interest-rate', href: '/macro-economic/interest-rate' },
  { id: 6, label: 'sales-tax-rate', href: '/macro-economic/sales-tax-rate' },
  { id: 7, label: 'corruption-rank', href: '/macro-economic/corruption-rank' },
  { id: 8, label: 'corporate-tax-rate', href: '/macro-economic/corporate-tax-rate' },
  { id: 9, label: 'government-debt-to-GDP', href: '/macro-economic/government-debt-to-GDP' },
  { id: 10, label: 'personal-income-tax-rate', href: '/macro-economic/personal-income-tax-rate' },
];

export const EconomicDataTabsUI = ({
  isInProgress,
  location: { pathname },
}) => {
  const [, setValue] = React.useState(0);
  const handleChange = (e, newValue) => setValue(newValue);
  const tabIdx = R.findIndex(R.propEq('href', pathname), routes);

  return (
    <AppBar position="relative" color="default" className="mt-3 economic-values-tabs">
      {isInProgress && <LinearProgress className="w-100 position-absolute" />}
      <Tabs
        value={tabIdx}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {routes.map(({ id, label, href }) => (
          <Tab key={id} to={href} label={label} component={NavLink} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export const EconomicDataTabs = withRouter(EconomicDataTabsUI);
