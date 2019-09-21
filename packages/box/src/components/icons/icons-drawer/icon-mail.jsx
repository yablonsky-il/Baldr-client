import React from 'react';
import PropTypes from 'prop-types';

export const IconMail = ({ className }) => (
  <svg width="24" height="24" className={className}>
    <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
  </svg>
);

IconMail.propTypes = {
  className: PropTypes.string.isRequired,
};
