import "./Me-module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import FirstLeft from "./images/stockholm.JPG";
import FirstMiddle from "./images/paris.JPG";
import FirstRight from "./images/river.jpg";
import SecondLeft from "./images/castlehill.JPG";
import SecondMiddle from "./images/mtcook.jpg";
import SecondRight from "./images/skymountain.jpg";
import ThirdLeft from "./images/sakura.jpg";
import ThirdMiddle from "./images/park.jpg";
import ThirdRight from "./images/cosmos.JPG";

const Me = () => {
  return (
    <div className="about_container">
      <h3 className="about_title">Me</h3>
      <div className="introduction">
        <p>
          I would be grateful for your interst! <br />
          I am a Frontend Developer based in Stockholm.<br className="sp-br" />
          <br />
          I love writing codes but also I love photography.
          <br />
        </p>
      </div>

      <div className="photos">
        <img src={FirstLeft} alt="stockholm" />
        <img src={FirstMiddle} alt="paris" />
        <img src={FirstRight} alt="paris-river" />
        <img src={SecondLeft} alt="paris" />
        <img src={SecondMiddle} alt="paris" />
        <img src={SecondRight} alt="paris" />
        <img src={ThirdLeft} alt="paris" />
        <img src={ThirdMiddle} alt="paris" />
        <img src={ThirdRight} alt="paris" />
        <button className="more_btn"><a href="https://www.instagram.com/aripei_27">More photos <FontAwesomeIcon icon={faInstagram} size="lg" color="#fff" spin /></a></button>
      </div>
    </div>
  );
};

export default Me;
