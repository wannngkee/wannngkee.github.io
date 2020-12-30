import React from "react";
import styles from "./home.module.scss";
//import profile from "../../assets/image/profile.jpg";
import avatar from "../../assets/image/avatar.jpg";
import Projectlist from "../../components/ProjectList/index";

function HomePage() {
  return (
    <div className={styles.wrap}>
      <section className={styles.brief}>
        <img src={avatar} alt="" />
        <h1>Ke Wang(王科)</h1>
        <ul>
          <li>Novice Software Engineer</li>
          <li>Lifelong Learner</li>
          <li>Amateur Backpacker</li>
        </ul>
        <p>👋 Hey it's Ke here! I also go by Vicky! </p>
        <p>
          I am a student at Monash University pursuiting master's degree of
          Information Technology.
        </p>
      </section>
      <section className={styles.work}>
        <div className={styles.title}>
          <h3>A selection of projects</h3>
        </div>
        <Projectlist />
      </section>
    </div>
  );
}

export default HomePage;
