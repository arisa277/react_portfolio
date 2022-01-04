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
import { useState } from "react";


const Me = () => {
  const [modal, setModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(undefined);

  const openModalPhoto = (img) => {
    setModal(true);
    setModalPhoto(img)
  }

  const closeModalPhoto = () => {
    setModal(false);
    setModalPhoto(undefined)
  }

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
        <img src={FirstLeft} alt="stockholm" onClick={() => openModalPhoto(FirstLeft)} />
        <img src={FirstMiddle} alt="paris" onClick={() => openModalPhoto(FirstMiddle)} />
        <img src={FirstRight} alt="paris-river" onClick={() => openModalPhoto(FirstRight)} />
        <img src={SecondLeft} alt="castlehill" onClick={() => openModalPhoto(SecondLeft)} />
        <img src={SecondMiddle} alt="mtcook" onClick={() => openModalPhoto(SecondMiddle)} />
        <img src={SecondRight} alt="mtcookwithsky" onClick={() => openModalPhoto(SecondRight)} />
        <img src={ThirdLeft} alt="cherryblossam" onClick={() => openModalPhoto(ThirdLeft)} />
        <img src={ThirdMiddle} alt="cornwallpark" onClick={() => openModalPhoto(ThirdMiddle)} />
        <img src={ThirdRight} alt="cosmos" onClick={() => openModalPhoto(ThirdRight)} />
        <button className="more_btn"><a href="https://www.instagram.com/aripei_27" target="_blank" rel="noreferrer">More photos <FontAwesomeIcon icon={faInstagram} size="lg" color="#fff" spin /></a></button>
      </div>
      {/* modal */}
      {modal &&
        <div className="modal">
          <div className="modal-background" onClick={closeModalPhoto}></div>
          <div className="modal-content">
            <img src={modalPhoto} alt="photos" />
          </div>
        </div>}
    </div>
  );
};

export default Me;
