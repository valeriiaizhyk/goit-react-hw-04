import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.container}>
        {images.map((image) => (
          <li key={image.id}>
            <div>
              <ImageCard image={image} openModal={openModal} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
