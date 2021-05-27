import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <header className={styles.nav}>
      <div className={styles.box}>
        <Link href="/">
          <a>
            <div className={styles.boxleft}>{/* <b>My gitBlog</b> */}</div>
          </a>
        </Link>
        <div className={styles.boxright}>
          <Link href="/">
            <a>
              <p className={router.pathname === "/" ? styles.selected : null}>
                Home
              </p>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <p
                className={
                  router.pathname === "/projects" ? styles.selected : null
                }
              >
                Projects
              </p>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
