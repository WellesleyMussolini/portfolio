import styles from './card.module.scss';
import { AiFillGithub } from "react-icons/ai"
import { MdLaunch } from "react-icons/md"
import { CardProps } from './card.interface';

const Card = ({ title, description, stacks, sourceCode, livePreview }: CardProps) => (
    <div className={styles.container}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
            {stacks.map((stack, index) => (
                <li key={index}>{stack}</li>
            ))}
        </ul>
        <div>
            <a href={sourceCode} target="_blank">
                <AiFillGithub />
            </a>
            <a href={livePreview} target="_blank">
                <MdLaunch />
            </a>
        </div>
    </div>
);

export default Card;