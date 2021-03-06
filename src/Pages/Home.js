import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
              I am passionate about building hands-on web apps
            </div>
            <div className="circle-2">
              Skilled in JavaScript, <br />
              React, Vue, Nuxt, HTML5 and CSS3
            </div>
            <div className="circle-3">I am looking for a job!</div>
          </div>
          <div className="icons">
            <a
              href="https://github.com/arisa277"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="#000" />
            </a>
            <a
              href="https://www.linkedin.com/in/arisanii/"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#000" />
            </a>
            <a
              href="https://aripei27.com/contact"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="#000" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
