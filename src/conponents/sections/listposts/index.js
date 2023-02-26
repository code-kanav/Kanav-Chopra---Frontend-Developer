import React from "react";
import HorizontalCard from "../../cards/horizontal";
import styles from "./listPosts.module.scss";

export default function ListPosts({ data }) {
  return (
    <div id="popular" className={styles.listPosts}>
      <h3 className="container">Popular of the Week!</h3>
      <div className={styles.listPostsWrapper}>
        {data.slice(2, 6).map((res, i) => {
          return <HorizontalCard key={i} data={res} />;
        })}
      </div>
    </div>
  );
}
