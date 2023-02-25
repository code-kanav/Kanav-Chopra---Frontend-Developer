import React from "react";
import { FaClock, FaTimes, FaTimesCircle, FaUser } from "react-icons/fa";
import { formatDate } from "../../../lib/dateFormatter";
import styles from "./overlayCard.module.scss";

export default function OverlayCard({ data }) {
  
  const featuredImage = data[0]?.flickr_images[0];
  const postTitle = data[0]?.rocket_name;
  const description = data[0]?.description
  // const authorName = data[0].author.node.name;
  // const authorSlug = "/author/" + data[0].author.node.slug;
  const launchDate = data[0]?.first_flight;
  // const slug = data[0].slug;

  return (
    <div className={styles.overlayCard}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImage}>
          <img
            src={featuredImage}
            width="800"
            height="500"
            alt="featured image"
          />
          <div className={styles.cardContent}>
          <a href={"/"}><h3 className={styles.cardTitle}>{postTitle}</h3></a>
          <p className={styles.cardDescription}>{description}</p>
            <div className={styles.cardMeta}>
              <span className={styles.cardDate}>
                <FaClock /> <p>First Flight:</p><span>{launchDate?formatDate(new Date(launchDate)):""}</span>
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
