import React from 'react';
import PropTypes from 'prop-types';

export const IconStatistic = ({ className }) => (
  <svg width="24" height="24" className={className}>
    <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m1 18h2v-6H7v6m4 0h2v-8h-2v8m4 0h2v-4h-2v4z" />
  </svg>
);

IconStatistic.propTypes = {
  className: PropTypes.string.isRequired,
};
