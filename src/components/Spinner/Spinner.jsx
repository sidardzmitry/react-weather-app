import styles from "./Spinner.module.scss";
import { MagnifyingGlass } from "react-loader-spinner";



const Spinner = () => {


  return (
    <div className={styles.spinner}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#fff"
        color="#000"
      />
    </div>
  );
};

export { Spinner };
