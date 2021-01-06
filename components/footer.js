import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <ul className={`${utilStyles.list} ${utilStyles.tight}`}>
        <li className={styles.iconItem}>
          <a className={styles.icon} href="https://github.com/wannngkee">
            <FaGithub />
          </a>
        </li>
        <li className={styles.iconItem}>
          <a
            className={styles.icon}
            href="https://www.linkedin.com/in/ke-vicky-wang"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className={styles.iconItem}>
          <a
            className={styles.icon}
            href="mailto:wannngkee@gmail.com"
            target="_top"
          >
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <p className={utilStyles.footernote}>© {year} Ke Wang</p>
    </footer>
  );
}
