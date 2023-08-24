import styles from "./overview.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Overview = ({ items, responsive }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.showcase}>
                <AliceCarousel
                    infinite
                    autoPlay
                    disableButtonsControls
                    disableDotsControls
                    mouseTracking
                    autoPlayInterval={1000}
                    items={items}
                    responsive={responsive}
                />
            </div>
        </div>
    )
};

export default Overview;