import React, { Component } from "react";
import styles from "./App.module.scss";
import { Link, Route, withRouter } from "react-router-dom";
import HomePage from "./HomePage/index";
import ProjectPage from "./ProjectPage/index";
import ProjectPageDetail from "./ProjectPageDetail/index";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/">
              <div className={styles.boxleft}>
                <b>My gitBlog</b>
              </div>
            </Link>
            <div className={styles.boxright}>
              <Link to="/">
                <p
                  className={location.pathname === "/" ? styles.selected : null}
                >
                  Home
                </p>
              </Link>
              <Link to="/projects">
                <p
                  className={
                    location.pathname === "/projects" ? styles.selected : null
                  }
                >
                  Projects
                </p>
              </Link>
            </div>
          </div>
        </header>
        <section className={styles.content}>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route
            path="/projects/:id"
            component={(props) => <ProjectPageDetail {...props} />}
          />
        </section>
        <footer className={styles.footer}>
          <ul>
            <li>
              <a className={styles.icon} href="https://github.com/wannngkee">
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                className={styles.icon}
                href="https://www.linkedin.com/in/ke-vicky-wang"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                className={styles.icon}
                href="mailto:wannngkee@gmail.com"
                target="_top"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
          <p>Copyright © 2020 Ke Wang</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
