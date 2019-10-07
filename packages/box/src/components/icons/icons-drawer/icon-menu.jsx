import React from 'react';
import PropTypes from 'prop-types';

export const IconMenu = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
  </svg>
);

IconMenu.propTypes = {
  className: PropTypes.string.isRequired,
};
