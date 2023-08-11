import { Input } from "./Input";
import styles from "./Modal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({
  handleShowIsModal = Function.prototype,
  search,
  setSearch,
  handleSearch = Function.prototype,
}) => {
  return (
    <div className={styles.modal}>
      <AiOutlineCloseCircle onClick={handleShowIsModal} />
      <Input
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export { Modal };
