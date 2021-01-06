import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import Layout from "../components/layout";
export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className={utilStyles.container}>
        <h1 className={utilStyles.headingXl}>🤦🏻‍♀️ Oops!</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </Layout>
  );
}
