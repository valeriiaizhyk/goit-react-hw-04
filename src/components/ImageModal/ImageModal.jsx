import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ onOpen, onClose, image }) => {
  const customStyle = {
    overlay: {
      backgroundColor: "#414141b2",
    },
  };
  return (
    <Modal
      isOpen={onOpen}
      style={customStyle}
      onRequestClose={onClose}
      className={css.modal}
    >
      <div>
        {image && (
          <img
            src={image.urls.regular}
            alt={image.alt_descriptio}
            className={css.img}
          />
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
