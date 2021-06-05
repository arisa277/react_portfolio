import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Home-module.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="main">
          <h3>
            Hello, I’m <br className="sp-br" />
            ARISA NII,
          </h3>
          <p className="job_role">a Frontend Developer.</p>
          <div className="circles">
            <div className="circle-1">
              I am passionate about building web app with user-friendly design
            </div>
            <div className="circle-2">
              Skilled in JavaScript, <br />
              React, Vue, Nuxt, HTML5, CSS3
            </div>
            <div className="circle-3">I am looking for a job in Sweden!</div>
          </div>
          <div className="icons">
            <a href="https://github.com/arisa277">
              <FontAwesomeIcon icon={faGithub} size="2x" color="#000" />
            </a>
            <a href="https://www.linkedin.com/in/arisanii/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#000" />
            </a>
            <FontAwesomeIcon icon={faFilePdf} size="2x" color="#000" />
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
