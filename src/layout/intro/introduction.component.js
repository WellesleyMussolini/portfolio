import React from "react";
import styles from "./introduction.module.css";
import Typed from "react-typed";

class Introduction extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div id={styles.stars} />
                <div id={styles.stars2} />
                <div id={styles.stars3} />

                <div className={styles.wrapper}>
                    {/* DONE */}
                    <div>
                        <h1 className={styles.title}>
                            Hello, I am</h1>
                        <h1 className={styles.title}><strong style={{ fontWeight: "bolder" }}>Wellesley Mussolini</strong>
                            <span className={styles.wave} role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                    </div>

                    {/* DONE */}
                    <p className={styles.skills}>
                        <strong>
                            <Typed
                                strings={[
                                    "Front-end Developer",
                                    "Back-end Developer",
                                    "Full Stack Developer",
                                ]}
                                typeSpeed={80}
                                backDelay={2000}
                                backSpeed={30}
                                loop
                            />
                        </strong>
                    </p>

                    {/* DONE */}
                    <button className={styles.button}>
                        <a
                            href="#work"
                            role="button"
                        >
                            Explore My Work
                        </a>
                    </button>
                </div>
            </div >
        );
    }
}

export default Introduction;