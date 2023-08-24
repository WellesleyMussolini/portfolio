import React from "react";
import styles from "./navigation.module.css";
import { useScrollHandler } from "../scroll-down/scrolldown.component";

const Navigation = ({ navigation, text }) => {
    const scrolled = useScrollHandler();
    return (
        <div className={scrolled ? styles.scrolled : styles.navigator}>
            {navigation.map((navigator, index) => <div key={index}><p>{navigator[text]}</p></div>)}
        </div>
    )
};

export default Navigation;