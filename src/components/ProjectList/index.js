import React from "react";
import styles from "./projectList.module.scss";
import { Link } from "react-router-dom";
import postlist from "../../posts.json";

export default function ProjectList() {
  return (
    <div className={styles.projectlist}>
      <ul>
        {postlist.map((post) => (
          <li key={post.title}>
            <Link to={`/projects/${post.title.toLowerCase()}`}>
              <div className={styles.cover}>
                <img
                  src={require(`../../assets/images/${post.cover}`).default}
                  alt="project img"
                />
              </div>
              <div className={styles.brief}>
                <div className={styles.content}>
                  <h3>{post.title}</h3>
                  <p>{post.brief}</p>
                </div>
                <div className={styles.tag}>
                  {post.tags &&
                    post.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
