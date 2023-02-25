import React from "react";
// import { formatDate } from "../../../lib/dateFormatter";
import styles from "./verticalCard.module.scss";

export default function VerticalCard({data}) {

  const featuredImage = data?.flickr_images[1];
  const postTitle = data?.rocket_name;
  const description = data?.description
  const launchDate = data?.first_flight;
  const status = data?.active;

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImage}>
          <img
            src={featuredImage}
            width={400}
            height={300}
            alt={postTitle}
          />
        </div>
        <div className={styles.cardContent}>
     <span className={styles.cardCategory}>{status?"Active":"In-Active"}</span>
         <span className={styles.cardTitle}>
            {postTitle}
          </span>
          <span className={styles.cardExcerpt} dangerouslySetInnerHTML={{__html: description}}>
          </span>
          <div className={styles.cardMeta}>
            <div className={styles.cardAuthorDate}>
              {/* <span className={styles.cardpubDate}>First Launch: {formatDate(new Date(launchDate))}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
