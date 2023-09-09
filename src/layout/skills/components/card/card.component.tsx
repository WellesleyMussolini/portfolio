import styles from "./card.module.scss";
import { CardProps } from "./card.interface";

const Card = ({ card, index }: CardProps) => (
    <div className={styles.container} title={card.stack} key={index}>
        <div className={styles.wrapper}>
            <div className={styles.images}>
                <img src={card.icon} alt={card.stack} />
            </div>
            <h3>{card.stack}</h3>
        </div>
    </div>
);

export default Card;