import "./Me-module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Me = () => {
  return (
    <div className="about_container">
      <div className="main">
        <h3 className="about_title">Me</h3>
        <div className="introduction">
          <p>
            I would be grateful for your interst! <br />
            I am a Frontend Developer based in Stockholm.<br className="sp-br" />
            <br />
          </p>
        </div>
        {/* <div className="about_circles">
          <div className="about_circle-1">
            Love to learn new things and solving problems
          </div>
          <div className="about_circle-2">Keen to make sustainable codes</div>
          <div className="about_circle-3">And user-friendly interface!</div>
          <div className="about_circle-4">My passion is taking photos</div>
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
                className="insta-icon"myse
              />
            </a>
          </div>
          <div className="about_circle-6"> And also I love reading books!</div>
        </div> */}
        <div className="photos">

        </div>
        <button>More Photos</button>
      </div>
    </div>
  );
};

export default Me;
