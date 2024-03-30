import css from "./ImageCard.module.css";

const ImageCard = ({ image: { urls, alt_description } }) => {
  return (
    <div>
      <img src={urls.small} alt={alt_description} className={css.img} />
    </div>
  );
};

export default ImageCard;
