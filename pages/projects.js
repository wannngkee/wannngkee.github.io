import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import ProjectList from "../components/projectlist";
import Head from "next/head";

export default function Projects({ allPostsData }) {
  return (
    <Layout project>
      <Head>
        <title>My Projects</title>
      </Head>
      <div className={utilStyles.pagetitle}>
        <h3 className={`${utilStyles.headingLg} ${utilStyles.colorInherit}`}>
          My Projects
        </h3>
        <p>A collection of different things I have made.</p>
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
