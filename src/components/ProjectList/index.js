import React from "react";
import styles from "./project.module.scss";
import { Link } from "react-router-dom";

export default function ProjectList(props) {
  return (
    <div className={styles.projectlist}>
      <ul>
        {props.dataSource.map((item) => (
          <li key={item.id}>
            <Link to={`/projects/${item.id}`}>
              <div className={styles.cover}>
                <img
                  src={require(`../../assets/images/${item.cover}`)}
                  alt="project img"
                />
              </div>
              <div className={styles.brief}>
                <h3>{item.title}</h3>
                <p>{item.brief}</p>
                <div className={styles.tag}>
                  {item.tags &&
                    item.tags.map((tag, index) => (
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
