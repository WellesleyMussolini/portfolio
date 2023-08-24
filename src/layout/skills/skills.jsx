import styles from "./skills.module.css";

import Card from "./components/card/card.component";
import { skillsMock } from "./mock/skills.mock";

const Skills = () => {
    const isFetching = false;

    if (isFetching) return "loading";

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>competências adquiridas</h2>

                <h3>Habilidades</h3>
            </div>
            <Card skillsMock={skillsMock} />
        </section>
    );
};

export default Skills;