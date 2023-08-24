import React from "react";
import styles from "./introduction.module.css";
import Typed from "react-typed";
import StarsAnimation from "./components/stars-animation/stars.component";

const Introduction = () => {
    return (
        <div className={styles.container}>
            <StarsAnimation />
            <div className={styles.wrapper}>
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
            </div>
        </div >
    );
}

export default Introduction;