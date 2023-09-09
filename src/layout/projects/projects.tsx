import styles from './projects.module.scss'
import { projects } from './mock/projects.mock';
import Card from './components/card.component';

const Projects = () => {
    if (!projects.length) return null;
    return (
        <div className={styles.container}>
            <h1>PROJETOS</h1>
            <div className={styles.wrapper}>
                {
                    projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            stacks={project.stack}
                            sourceCode={project.sourceCode}
                            livePreview={project.livePreview}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;