import React from 'react';
import PropTypes from 'prop-types';

export const IconWebChat = ({ className }) => (
  <svg width="24" height="24" className={className}>
    <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m-9-8H1V3a2 2 0 0 1 2-2h16v2H3v12z" />
  </svg>
);

IconWebChat.propTypes = {
  className: PropTypes.string.isRequired,
};
