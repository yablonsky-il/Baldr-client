import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import {
  openModal,
  closeModal,
} from '../actions/system';

export const withModalActions = (WrappedComponent) => {
  class ModalActions extends Component {
    static propTypes = {
      openModal: PropTypes.func.isRequired,
      closeModal: PropTypes.func.isRequired,
      modals: PropTypes.shape().isRequired,
    };

    getCurrentModalOpened = (id) => {
      const { modals } = this.props;

      return !!modals[id];
    }

    render() {
      const props = R.dissoc('modals', this.props);

      return (
        <WrappedComponent
          {...props}
          getCurrentModalOpened={this.getCurrentModalOpened}
        />
      );
    }
  }

  const mapStateToProps = ({ modals }) => ({ modals });

  const mapDispatchToProps = {
    openModal,
    closeModal,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ModalActions);
};
