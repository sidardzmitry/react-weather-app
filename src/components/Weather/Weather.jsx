import { useState, useEffect } from "react";
import styles from "./Weather.module.scss";

import { WeatherTop } from "./WeatherTop/WeatherTop";
import { WeatherBottom } from "./WeatherBottom/WeatherBottom";
import { Spinner } from "../Spinner/Spinner";
import { Modal } from "../Modal/Modal";

import { API_URL, API_KEY } from "../../service/config.js";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [search, setSearch] = useState("");

  const fetchWeather = async () => {
    const response = await fetch(
      `${API_URL}/current.json?key=${API_KEY}&q=Minsk`
    );
    const data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
    setLoading(false);
  }, [search]);

  const handleShowIsModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const searchWeatherCity = (city) => {
    fetch(`${API_URL}/current.json?key=${API_KEY}&q=${city}`)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchWeatherCity(search);
    setSearch("");
    handleShowIsModal();
  };

  return (
    <section className={styles.weather}>
      {modalIsVisible && (
        <Modal
          handleShowIsModal={handleShowIsModal}
          search={search}
          setSearch={setSearch}
          searchWeatherCity={searchWeatherCity}
          handleSearch={handleSearch}
        />
      )}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <WeatherTop handleShowIsModal={handleShowIsModal} weather={weather} />{" "}
          <WeatherBottom weather={weather} />
        </>
      )}
    </section>
  );
};

export { Weather };
