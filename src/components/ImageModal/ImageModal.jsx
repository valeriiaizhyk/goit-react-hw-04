import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  const customStyle = {
    overlay: {
      backgroundColor: "#414141b2",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      style={customStyle}
      onRequestClose={onClose}
      className={css.modal}
    >
      <div>
        {image && (
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={css.img}
          />
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
