import "./Work-module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Diary from "./images/mood-tracker.jpg";
import Vocab from "./images/vocab-app.jpg";
import Todo from "./images/todo.jpg";
import Blog from "./images/gatsby.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Works = () => {
  return (
    <div className="work_container">
      <h1>Works</h1>
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
              A diary application using React and Firebase. You can write your
              feeling with emoji.
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
              Since I am struggling with memorizing Swedish, I made a typing
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
            <img src={Todo} alt="todo-app" />
          </div>
          <div className="work_description right">
            To-Do List
            <p className="language">
              React
              <a
                href="https://github.com/arisa277/react-todo-app"
                className="icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#000" />
              </a>
            </p>
            <p>
              This is a simple To-Do list using React, enabling users to add and
              update, delete lists.
            </p>
            <div className="btn">
              <a
                href="https://todo-app-734f7.web.app"
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
