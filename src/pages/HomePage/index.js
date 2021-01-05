import React from "react";
import styles from "./home.module.scss";
import ProjectList from "../../components/ProjectList/index";
import avatar from "../../assets/images/avatar.png";

export default function HomePage() {
  return (
    <div className={styles.wrap}>
      <section className={styles.brief}>
        <img src={avatar} alt="profile img" />
        <h1>Ke Wang(王科)</h1>
        <ul>
          <li>Novice Software Engineer</li>
          <li>Lifelong Learner</li>
          <li>Amateur Backpacker</li>
        </ul>
        <p>👋 Hey it's Ke here! I also go by Vicky! </p>
        <p>
          I am a student studying Information Technology at Monash University.
        </p>
      </section>
      <section className={styles.work}>
        <div className={styles.separator}></div>
        <div className={styles.title}>
          <h3>A selection of projects</h3>
        </div>
        <ProjectList />
      </section>
    </div>
  );
}
