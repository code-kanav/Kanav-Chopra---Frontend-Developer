import React from "react";
import { formatDate } from "../../../lib/dateFormatter";
import styles from "./listCard.module.scss";
export default function ListCard({ data }) {
  const featuredImage = data?.flickr_images[0];
  const postTitle = data?.rocket_name;
  const description = data?.description;
  const launchDate = data?.first_flight;

  return (
    <div className={styles.listCard}>
      <a href="/">
        <div className={styles.cardCategory}>{postTitle}</div>
      </a>
      <div className={styles.cardContent}>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className={styles.cardDate}>
          <p>First Flight:</p>
          <span>{launchDate ? formatDate(new Date(launchDate)) : ""}</span>
        </div>
      </div>
      <div className={styles.cardThumb}>
        <img width={120} height={120} src={featuredImage} alt="post title" />
      </div>
    </div>
  );
}
