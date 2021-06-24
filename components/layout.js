import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";

import Nav from "./nav";
import Footer from "./footer";

export const siteTitle = "Ke's Portfolio";

export default function Layout({ children, home, project }) {
  return (
    <div className={styles.app}>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Nav />
      <div className={home || project ? styles.wrap : styles.container}>
        {/* <div className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </div> */}
        <main>{children}</main>
        {!home && !project && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
