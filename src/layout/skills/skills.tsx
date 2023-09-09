import styles from "./skills.module.scss";
import Overview from "./components/overview/overview.component";
import { skillsMock } from "./mock/skills.mock";

const Skills = () => {
    const isFetching = false;

    if (isFetching) return <div>LOADING...</div>;

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>competências adquiridas</h2>
                <h3>Habilidades</h3>
            </div>
            <Overview skillsMock={skillsMock} />
        </section>
    );
};

export default Skills;