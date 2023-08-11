import GlobalSvgDetails from '../../../assets/icons/GlobalSvgDetails';
import styles from './WeatherBottom.module.scss';


const WeatherBottom = ({weather = []}) => {

    const {current = []} = weather;
    const {cloud, pressure_mb, uv, humidity, vis_km, wind_kph, } = current;
    
    const items = [
        {
            id: 'cloud-details',
            value: `${cloud} %`,
            name: 'CLOUD'
        },
        {
            id: 'humidity-details',
            value: `${humidity} %`,
            name: 'HUMIDITY'
        },
        {
            id: 'gauge-details',
            value: `${pressure_mb} mb`,
            name: 'PRESSURE'
        },
        {
            id: 'visibility-details',
            value: `${vis_km} km`,
            name: 'PRESSURE'
        },
        {
            id: 'uv-index-details',
            value: uv,
            name: 'IV INDEX'
        },
        {
            id: 'wind-details',
            value: `${wind_kph} km/h`,
            name: 'WIND SPEED'
        },
    ];

    return(
        <div className={styles.bottom}>
            {items.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.item__img}>
                        <GlobalSvgDetails id={item.id} className={styles.svg__details} />
                    </div>
                    <div className={styles.item__content}>
                        <div className={styles.item__content_value}>{item.value}</div>
                        <div className={styles.item__content_name}>{item.name}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export {WeatherBottom};