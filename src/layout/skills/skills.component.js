import styles from "./skills.module.css";

import Card from "./components/card/card.component";
import { skillsMock } from "./mock/skills.mock";

const Skills = () => {
    const isFetching = false;

    if (isFetching) return "loading";

    return (
        <section className={styles.container}>
            <h1>REFERENCE: <a href="https://github.com/tech-jamara/DjangoReactPortfolio/tree/main" target="_blank">HERE</a></h1>
            <div className={styles.title}>
                <h2>My Skills Progress so far</h2>

                <h3>My Skills</h3>
            </div>
            <Card skillsMock={skillsMock} />
        </section>
    );
};

export default Skills;