import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ page, setPage }) => {
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div className={css.container}>
      <button onClick={handleLoadMore} className={css.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
