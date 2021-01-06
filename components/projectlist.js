import utilStyles from "../styles/utils.module.css";
import styles from "../components/projectList.module.scss";
import Link from "next/link";

export default function ProjectList(props) {
  return (
    <div className={styles.projectlist}>
      <ul>
        {props.projectsData.map(({ id, title, brief, cover, tags }) => (
          <li key={id}>
            <Link href={`/projects/${id}`}>
              <a>
                <div className={styles.cover}>
                  <img src={`/images/${cover}`} alt={`${title} img`} />
                </div>
                <div className={styles.brief}>
                  <div className={styles.content}>
                    <h3>{title}</h3>
                    <p>{brief}</p>
                  </div>
                  <div className={styles.tag}>
                    {tags.split(",").map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
