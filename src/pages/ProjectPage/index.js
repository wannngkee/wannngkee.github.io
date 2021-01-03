import React from "react";
import styles from "./projects.module.scss";
import ProjectList from "../../components/ProjectList/index";
export default function ProjectPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h3>My Projects</h3>
        <p>A collection of different things I have made.</p>
      </div>
      <ProjectList />
    </div>
  );
}
