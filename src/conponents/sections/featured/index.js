import React from "react";
import ListCard from "../../cards/listcard";
import OverlayCard from "../../cards/overlay";
import styles from "./featured.module.scss";

export default function Featured({ data }) {
  return (
    <div id="featured" className={styles.featured}>
      <div className={styles.featGrid}>
        <h1 className={styles.featuredHeading}>Our Featured Rockets</h1>
        <div className={styles.gridWrapper}>
          <div className={styles.left}>
            <OverlayCard data={data} />
          </div>
          <div className={styles.right}>
            {data.slice(1, 5).map((res, i) => {
              return <ListCard key={i} data={res} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
