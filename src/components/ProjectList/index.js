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
            <Link to={`/projects/${post.title}`}>
              <div className={styles.cover}>
                <img
                  src={require(`../../assets/images/${post.cover}`)}
                  alt="project img"
                />
              </div>
              <div className={styles.brief}>
                <h3>{post.title}</h3>
                <p>{post.brief}</p>
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
