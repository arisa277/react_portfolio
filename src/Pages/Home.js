import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';

import "./Home-module.css";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="main">
          <h3>Hello, I’m ARISA NII,</h3>
          <p className="job_role">a Frontend Developer.</p>
          <div className="balls">
            <div className="circle-1">
              <p>I am passionate about writing codes and solving problems</p>
            </div>
            <div className="circle-2">
              <p>
                Skilled in JavaScript, <br />
                React, Vue, Nuxt, HTML5, CSS3
              </p>
            </div>
            <div className="circle-3">
              <p>
                I am looking for a job in Sweden! 
              </p>
            </div>
          </div>
            <div className="icons">
            <a href="#"><FontAwesomeIcon icon={faGithub} size="lg" color="#000"/></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} size="lg" color="#000"/></a>
            <a href="#"><FontAwesomeIcon icon={faFilePdf} size="lg" color="#000"/></a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} size="lg" color="#000"/></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
