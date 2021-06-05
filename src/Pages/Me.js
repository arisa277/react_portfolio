import "./Me-module.css";

const Me = () => {
  return (
    <div className="about_container">
      <h1 className="about_title">Me</h1>I am a ... Frond-end Developer working
      in Oita, Japan. I love to build a web app and learn new skills. I also
      love Photography, Traveling, and Coffee.
      <div className="circles">
        <div className="about_circle-1">
          Skilled in JavaScript, React, Vue, Nuxt, HTML5, CSS3
        </div>
        <div className="about_circle-2">Love photography, traveling, </div>
        <div className="about_circle-3"></div>
      </div>
      <div className="circles">
        <div className="about_circle-4"></div>
        <div className="about_circle-5"></div>
      </div>
    </div>
  );
};

export default Me;
