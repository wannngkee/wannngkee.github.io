import React from "react";
import styles from "./post.module.scss";
import { Redirect } from "react-router-dom";
import postlist from "../../posts.json";
import Markdown from "react-markdown";

export default function PostPage(props) {
  const title = props.match.params.title;
  if (!title) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (title === post.title.toLowerCase()) {
      fetchedPost.content = post.content;
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <Markdown source={fetchedPost.content} escapeHtml={false} />
      </div>
    </div>
  );
}
