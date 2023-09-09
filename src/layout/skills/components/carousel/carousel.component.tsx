import styles from "./carousel.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselProps } from "./carousel.interface";

const Carousel = ({ card, responsiveness }: CarouselProps) => (
    <div className={styles.wrapper}>
        <div className={styles.showcase}>
            <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={card}
                responsive={responsiveness}
            />
        </div>
    </div>
);

export default Carousel;