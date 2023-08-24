import React from "react";
import styles from "./card.module.css";
import Overview from "../overview/overview.component";
import { responsiveness } from "../../mock/responsiveness.mock";

const Card = ({skillsMock}) => {
    const [icons, setIcons] = React.useState([]);

    React.useEffect(() => {
        setIcons(skillsMock);
    }, []);

    const card = icons?.map((details) => (
        <div className={styles.container} title={details.lang_name} key={details.id}>
            <div className={styles.wrapper}>
                <div className={styles.images}>
                    <img src={details.icon} alt="" />
                </div>
                <h3>{details.lang_name}</h3>
            </div>
        </div>
    ));
    return <Overview items={card} responsive={responsiveness} />
};

export default Card;