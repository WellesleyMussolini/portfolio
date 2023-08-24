import React from "react";
import styles from "./introduction.module.css";
import Typed from "react-typed";
// import StarsAnimation from "./components/stars-animation/stars.component";
// import HandWave from "./components/hand-wave/hand_wave.component";

const Introduction = () => (
        <div className={styles.container}>
            {/* <StarsAnimation /> */}
            <div className={styles.wrapper}>
                {/* DONE */}
                {/* <div>
                    <h1 className={styles.title}>
                        Olá, eu sou</h1>
                    <h1 className={styles.title}><strong style={{ fontWeight: "bolder" }}>Wellesley Mussolini</strong>
                        <HandWave />
                    </h1>
                </div> */}

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

                {/* <button className={styles.button}>
                    <a
                        href="#work"
                        role="button"
                    >
                        Explore My Work
                    </a>
                </button> */}
            </div>
        </div >
    );

export default Introduction;