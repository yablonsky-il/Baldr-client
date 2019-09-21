import React from 'react';
import PropTypes from 'prop-types';

export const IconMenu = ({ className }) => (
  <svg className={className} width="24" height="24">
    <path d="M5 13l4 4-1.4 1.42L1.18 12 7.6 5.58 9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10z" />
  </svg>
);

IconMenu.propTypes = {
  className: PropTypes.string.isRequired,
};
