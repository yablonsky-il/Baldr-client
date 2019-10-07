import React from 'react';
import PropTypes from 'prop-types';

export const IconHome = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

IconHome.propTypes = {
  className: PropTypes.string.isRequired,
};
