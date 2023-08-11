import styles from "./Modal.module.scss";

const Input = ({
  search,
  setSearch,
  handleSearch = Function.prototype,
}) => {
  return (
    <form className={styles.form}>
      <input
        className={styles.form__inp}
        type="search"
        placeholder="Writing city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={styles.form__btn} type="submit" onClick={handleSearch}>
        Ok
      </button>
    </form>
  );
};

export { Input };
