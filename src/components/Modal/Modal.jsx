import Modal from 'react-modal';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
import CamperItemDetails from '../CamperItemDetails/CamperItemDetails';

Modal.setAppElement('#root');

export const DetailsModal = ({ isOpen, onClose, item }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
    >
      <CamperItemDetails item={item} onClose={onClose} />
    </Modal>
  );
};

DetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object // Define more specific shape if needed
};

export default DetailsModal;
