import styles from "./contact.module.css";
import { contact } from "./mock/contact.mock";

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1>CONTATO</h1>
            <a href="mailto:iei.muss@gmail.com">
                <button className={styles.button}>
                    Email
                </button>
            </a>
            <h2>OUTRAS REDES</h2>
            <div className={styles.social}>
                {
                    contact.map((contact, index) => (
                        <a key={index} href={contact.link} target="_blank">{contact.icon}</a>
                    ))
                }
            </div>

        </div>
    )
};

export default Contact;