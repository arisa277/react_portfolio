import "./Me-module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Me = () => {
  return (
    <div className="about_container">
      <h1 className="about_title">Me</h1>
      <p className="introduction">
        It would be grateful if you're interested in me! <br />
        I am working as a frontend developer in Oita, Japan.
        <br />
      </p>
      <div className="about_circles">
        <div className="about_circle-1">I love to learn new things</div>
        <div className="about_circle-2">and solving problems.</div>
        <div className="about_circle-3"></div>
      </div>
      <div className="about_circles">
        <div className="about_circle-4">Love Photography and Traveling.</div>
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
        <div className="about_circle-6"> My favorite camera is FUJIFILM.</div>
      </div>
      <div className="about_circles">
        <div className="about_circle-7">
          My favorite country is New Zealand.
        </div>
        <div className="about_circle-8">...and I am a cat person 🐈 </div>
      </div>
    </div>
  );
};

export default Me;
