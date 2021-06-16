import "./Me-module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Me = () => {
  return (
    <div className="about_container">
      <div className="main">
        <h3 className="about_title">Me</h3>
        <p className="introduction">
          I would be grateful <br className="sp-br" />
          if you're interested in me! <br />
          I am working as a frontend developer <br className="sp-br" />
          in Oita, Japan.
          <br />
        </p>
        <div className="about_circles">
          
            <div className="about_circle-1">I love to learn new things</div>
            <div className="about_circle-2">and solving problems.</div>
            <div className="about_circle-3"></div>
         
            <div className="about_circle-4">
              Love Photography and Traveling.
            </div>
            <div className="about_circle-5">
              <a
                href="https://www.instagram.com/aripei_27/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  color="#fff"
                  className="insta-icon"
                />
              </a>
            </div>
            <div className="about_circle-6">
              {" "}
              My favorite camera is FUJIFILM.
            </div>
          </div>
        </div>
    </div>
  );
};

export default Me;
