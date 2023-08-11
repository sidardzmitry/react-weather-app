import styles from "./App.module.scss";
import Header from "../Header/Header";
import { Weather } from "../Weather/Weather";

const App = () => {

  return (
    <div className={styles.app}>
      <Header />
      <div className="container">
        <Weather />
      </div>
    </div>
  );
};

export default App;
