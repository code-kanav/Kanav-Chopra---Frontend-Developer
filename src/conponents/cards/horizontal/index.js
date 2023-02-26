import React from "react";
import { formatDate } from "../../../lib/dateFormatter";
import styles from "./HorizontalCard.module.scss";

export default function HorizontalCard({ data }) {
  const featuredImage = data?.flickr_images[2];
  const postTitle = data?.rocket_name;
  const description = data?.description;
  const launchDate = data?.first_flight;
  const status = data?.active;

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImage}>
          <a href="/">
            <img
              placeholder="blur"
              src={featuredImage}
              width={400}
              height={300}
              alt={postTitle}
            />
          </a>
        </div>
        <div className={styles.cardContent}>
          <a href="/">
            {" "}
            <span className={styles.cardCategory}>
              {status === true ? "Active" : "In-Active"}
            </span>
          </a>
          <a href="/">
            <span className={styles.cardTitle}>{postTitle}</span>
          </a>
          <span
            className={styles.cardExcerpt}
            dangerouslySetInnerHTML={{ __html: description }}
          ></span>
          <div className={styles.cardMeta}>
            <div className={styles.cardAuthorDate}>
              <span className={styles.cardpubDate}>
                First Flight: {formatDate(new Date(launchDate))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
