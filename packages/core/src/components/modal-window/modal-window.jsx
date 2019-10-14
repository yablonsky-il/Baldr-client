import { connect } from 'react-redux';
import {
  openModal as openModalAction,
  closeModal as closeModalAction,
} from '../../actions/system';

const ModalWindowCore = ({
  children,
  id,
  isOpen,
  openModal,
  closeModal,
}) => children({
  id,
  isOpen,
  openModal,
  closeModal,
});

export const mapStateToProps = ({ modals }, { id }) => ({
  isOpen: modals[id],
});

export const mapDispatchToProps = {
  openModal: openModalAction,
  closeModal: closeModalAction,
};

export const ModalWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindowCore);
