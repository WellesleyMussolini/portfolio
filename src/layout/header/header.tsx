import React from "react";
import Navigation from "./components/navigation/navigation.component";
import styles from "./header.module.scss";
import logoDefault from "./images/male-default.png";
import logoScrolled from "./images/male-scrolled-down.png";
import { headerMock } from "./mock/header.mock";
import { useScrollHandler } from "./components/scroll-down/scrolldown.component";

const Header = () => {
    const scrolled = useScrollHandler();
    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <img src={scrolled ? logoScrolled : logoDefault} className={styles.logo} alt="wellesley-mussolini" />
            <Navigation navigation={headerMock} text="text" />
        </header>
    );
};

export default Header;