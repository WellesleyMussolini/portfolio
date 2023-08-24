import Introduction from "../layout/intro/introduction.component";
import Header from "../layout/header/header.component";
import styles from "./home.module.css";
import Resume from "./resume/resume";
import Skills from "../layout/skills/skills.component";

const Home = () => {
    return(
        <div>
            <Header />
            <div>
                <Introduction />
            </div>

            {/* <div>
                <Resume />
            </div> */}

            <div style={{background: "#0d012c"}}>
                <Skills />
            </div>
        </div>
    )
};

export default Home;