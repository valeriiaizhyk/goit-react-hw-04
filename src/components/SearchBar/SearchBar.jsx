import css from "./SearchBar.module.css";
import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return toast.error("Please enter at least one letter");
    onSearch(input);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
