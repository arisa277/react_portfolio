import "./Work-module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Diary from "./images/tracker.jpg";
import Vocab from "./images/vocab.jpg";
import TicTacToe from "./images/tictactoe.jpg";
import Blog from "./images/blog.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Works = () => {
  return (
    <div className="work_container">
      <h3 className="works_title">Works</h3>
      <p>These are my personal projects. <br/>Please take a look!</p>
      <div className="projects">
        {/* mood tracker */}
        <div className="project project_1">
          <div className="image">
            <img src={Diary} alt="diary-app" />
          </div>
          <div className="work_description right">
            Mood Tracker
            <p className="language">
              React / Firebase
              <a
                href="https://github.com/arisa277/Vocab-app"
                className="icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#000" />
              </a>
            </p>
            <p>
              A diary application written in React and Firebase. You can write your
              feelings with emojis.
            </p>
            <div className="btn">
              <a
                href="https://react-diary-ea33b.web.app"
                target="_blank"
                rel="noreferrer"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
        {/* vocab test */}
        <div className="project project_2">
          <div className="work_description left">
            Vocab Test
            <p className="language">
              Vue / Nuxt
              <a
                href="https://vocab-app-c8b82.web.app"
                className="icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#000" />
              </a>
            </p>
            <p>
              Since I am struggling to learn Swedish, I made a typing
              test application using Nuxt.
            </p>
            <div className="btn">
              <a
                href="https://vocab-app-c8b82.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Find Out More
              </a>
            </div>
          </div>
          <div className="image">
            <img src={Vocab} alt="vocab-app" />
          </div>
        </div>
        {/* todo list */}
        <div className="project project_3">
          <div className="image">
            <img src={TicTacToe} alt="tic-tac-toe-app" />
          </div>
          <div className="work_description right">
            Tic-Tac-Toe Game
            <p className="language">
              Vanilla JS / Socket.io
              <a
                href="https://github.com/arisa277/tic-tac-toe"
                className="icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#000" />
              </a>
            </p>
            <p>
              Tic-Tac-Toe game that allows you to play againt other player in real time.
              Make sure you have another window open before starting the game.
            </p>
            <div className="btn">
              <a
                href="https://tic-tac-toe-nii.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
        {/* gatsby blog */}
        <div className="project project_4">
          <div className="work_description left">
            Gatsby Blog
            <p className="language">
              Gatsby / Netlify
              <a
                href="https://github.com/arisa277/gatsby-blog"
                className="icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#000" />
              </a>
            </p>
            <p>A blog written in Japanese using Gatsby and Netlify CMS.</p>
            <div className="btn">
              <a href="https://aripei27.com/" target="_blank" rel="noreferrer">
                Find Out More
              </a>
            </div>
          </div>
          <div className="image">
            <img src={Blog} alt="gatsby-blog" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
