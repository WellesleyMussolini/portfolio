import React from "react";
import styles from "./contact.module.scss";
import { contactIcons, email } from "./mock/contact.mock";

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1>CONTATO</h1>
            <a href={`mailto:${email}`}>
                <button className={styles.button}>
                    Email
                </button>
            </a>
            <h2>OUTRAS REDES</h2>
            <div className={styles.social}>
                {
                    contactIcons.map((contact, index) => (
                        <a key={index} href={contact.link} target="_blank">
                            {React.createElement(contact.icon)} 
                        </a>
                    ))
                }
            </div>
        </div>
    )
};

export default Contact;