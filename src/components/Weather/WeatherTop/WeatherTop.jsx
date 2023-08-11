import styles from "./WeatherTop.module.scss";
import { AiOutlineSearch } from "react-icons/ai";



const WeatherTop = ({ handleShowIsModal = Function.prototype, weather = [] }) => {

  const {location = [], current = []} = weather;

  const {name, localtime} = location;
  const {temp_c, condition = []} = current;
  const {icon, text} = condition;


  return (
    <div className={styles.top}>
      <div className={styles.top__one}>
        <div className={styles.one__wrapper}>
          <AiOutlineSearch
            onClick={handleShowIsModal}
            className={styles.one__search}
          />
          <h6 className={styles.one__text}>Weather today in</h6>
        </div>
        <h1 className={styles.one__city}>{name}</h1>
      </div>

      <div className={styles.top__two}>
        <div className={styles.top__two_left}>
          <div className={styles.two__left_img}>
            {/* <GlobalSvgComponents id={"small_rain_sun"} /> */}
            <img src={icon} alt={text} />
          </div>
          <div className={styles.two__left_name}>{text}</div>
        </div>

        <div className={styles.top__two_right}>
          <div className={styles.two__right_time}>{localtime} PM</div>
          <div className={styles.two__right_temp}>{temp_c}°</div>
        </div>
      </div>
    </div>
  );
};

export { WeatherTop };
