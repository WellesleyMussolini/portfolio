import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/navigation.component";
import styles from "./header.module.css";
import logoDefault from "./images/male-default.png";
import logoScrolled from "./images/male-scrolled-down.png";
import { headerMock } from "./mock/header.mock";
import { useScrollHandler } from "./components/scroll-down/scrolldown.component";
import StarsAnimation from "../intro/layout/stars-animation/stars.component";

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