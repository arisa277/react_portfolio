import "./Me-module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Me = () => {
  return (
    <div className="about_container">
      <div className="main">
        <h3 className="about_title">Me</h3>
        <div className="introduction">
         <p>I would be grateful for your interst! <br />
          I am working as a frontend developer <br className="sp-br" />
          in Oita, Japan.
          <br />
         </p> 
        </div>
        <div className="about_circles">
            <div className="about_circle-1">Love to learn new things and solving problems.</div>
            <div className="about_circle-2">
            Stayed in New Zealand for 1 year,
            </div>
            <div className="about_circle-3">
            So my favorite country is New Zealand! 
            </div>
            <div className="about_circle-4">
            Since I was 18y old, my passion is taking photos.
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
              And also I love reading books!
            </div>
          </div>
        </div>
    </div>
  );
};

export default Me;
