import React from "react";
import styles from "./details.module.scss";
import AnimatedNumber from "animated-number-react";
export default function Details({ data, show }) {
  const value = 2437;
  const formatValue0 = (value) => value.toFixed(2);
  const value1 = 1897;
  const formatValue1 = (value) => value.toFixed(2);
  const value2 = 1305;
  const formatValue2 = (value) => value.toFixed(2);
  return (
    <div className={styles.detailsContainer}>
      {show ? (
        <div className={styles.details}>
          <p className={styles.quote}>
            “You want to wake up in the morning and think the future is going to
            be great - and that’s what being a spacefaring civilization is all
            about. It’s about believing in the future and thinking that the
            future will be better than the past. And I can’t think of anything
            more exciting than going out there and being among the stars.”
            <br />
            <span>-Elon Musk</span>
          </p>
        </div>
      ) : (
        <div className={styles.details}>
          <div className={styles.detailBox}>
            <div className={styles.detailVal}>
              <AnimatedNumber
                value={value}
                formatValue={formatValue0}
                duration={7000}
              />
            </div>
            <div className={styles.detailName}>
              <p>TOTAL ROCKETS LAUNCHED</p>
            </div>
          </div>
          <div className={styles.detailBox}>
            <div className={styles.detailVal}>
              <AnimatedNumber
                value={value1.toFixed(0)}
                formatValue={formatValue1}
                duration={7000}
              />
            </div>
            <div className={styles.detailName}>
              <p>TOTAL ROCKETS LANDED</p>
            </div>
          </div>
          <div className={styles.detailBox}>
            <div className={styles.detailVal}>
              <AnimatedNumber
                value={value2}
                formatValue={formatValue2}
                duration={7000}
              />
            </div>
            <div className={styles.detailName}>
              <p>TOTAL REFLIGHTS</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
