import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { withCore } from 'core/hocs/with-core-component';
import { ModalWindow as ModalWindowCore } from 'core/components/modal-window/modal-window';

const MODAL_SHOWN_CLASS = 'modal-shown';

export class ModalWindowUI extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    isOpen: false,
    className: '',
  };

  toggle = () => {
    const {
      isOpen, id, openModal, closeModal,
    } = this.props;

    if (isOpen) {
      closeModal(id);
      document.body.classList.remove(MODAL_SHOWN_CLASS);
    } else {
      openModal(id);
    }
  };

  render() {
    const { children, isOpen, className } = this.props;

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={className}
        open={isOpen}
        onClose={this.toggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 300 }}
      >
        <Fade in={isOpen}>
          {children}
        </Fade>
      </Modal>
    );
  }
}

export const ModalWindow = withCore(ModalWindowCore, ModalWindowUI);
