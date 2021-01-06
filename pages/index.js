import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../components/layout.module.scss";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import ProjectList from "../components/projectlist";
import Link from "next/link";

const name = "Ke Wang(王科)";
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.header}>
        <img
          src="/images/profile.jpg"
          className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <ul className={`${utilStyles.list} ${utilStyles.tight}`}>
          <li className={utilStyles.listItem}>Novice Software Engineer</li>
          <li className={utilStyles.listItem}>Lifelong Learner</li>
          <li className={utilStyles.listItem}>Amateur Backpacker</li>
        </ul>
      </div>
      <section className={utilStyles.center}>
        <p>👋 Hey it's Ke here! I also go by Vicky!</p>
        <p>I study Information Technology at Monash University.</p>
      </section>
      <div className={utilStyles.separator}></div>
      <div className={utilStyles.pagetitle}>
        <h3 className={`${utilStyles.headingMd} ${utilStyles.colorInherit}`}>
          A selection of projects
        </h3>
      </div>
      <ProjectList projectsData={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
