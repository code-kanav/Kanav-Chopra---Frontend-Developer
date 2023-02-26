import React from "react";
import styles from "../footer/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.newsLetterBox}>
          <div className={styles.newLetter}>
            <div className={styles.details}>
              <p>Want to know more ?</p>
              <p>Talk to us today!</p>
            </div>
            <div className={styles.actions}>
              <button className="ctaBtn primaryBtn">Get Started</button>
            </div>
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="footer logo" width={250} height={70} />
          </div>
          <div className={styles.footerNav}>
            <span className={styles.navLink}>Home</span>
            <span className={styles.navLink}>About</span>
            <span className={styles.navLink}>Company</span>
            <span className={styles.navLink}>Terms</span>
          </div>
          <div className={styles.footerNav}>
            <span className={styles.navLink}>Home</span>
            <span className={styles.navLink}>Privacy</span>
            <span className={styles.navLink}>Company</span>
            <span className={styles.navLink}>Contact</span>
          </div>
          <div className={styles.footerNav}>
            <span className={styles.navLink}>Get Started</span>
            <span className={styles.navLink}>About</span>
            <span className={styles.navLink}>Company</span>
            <span className={styles.navLink}>Products</span>
          </div>
        </div>
        <div className={styles.copyRight}>
          <span className={styles.copyRightText}>
            Your Website Name. All Rights Reserved
          </span>
          <span className={styles.copyRightText}>
            Made with ❤️ by Kanav Chopra.
          </span>
        </div>
      </div>
    </div>
  );
}
