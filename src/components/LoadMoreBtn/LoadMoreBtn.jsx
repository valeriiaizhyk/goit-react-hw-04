import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.container}>
      <button onClick={onLoadMore} className={css.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
