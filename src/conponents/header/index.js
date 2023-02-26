import React, { useEffect, useState } from "react";
import styles from "../header/header.module.scss";
import Search from "../search";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      title: "Featured",
      url: "#featured",
    },
    {
      title: "Popular",
      url: "#popular",
    },
    {
      title: "New",
      url: "#new",
    },
    {
      title: "Details",
      url: "#details",
    },
  ];
  useEffect(() => {
    document.body.classList.toggle("mobileNav-Open", open);
  }, [open]);

  return (
    <header className={styles.header}>
      
      <div className={styles.headerWrapper}>
        <div className={styles.brand}>
          <a href="/">
            <img src="/logo.png" alt="brand name" width={250} height={40} />
          </a>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigatinMenu}>
            {menu.map((item, i) => {
              return (
                <a key={i} href={item.url}>
                  <span className={styles.navLink}>{item.title}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.search}>
              <Search />
            </div>
        <div className={styles.socials}>
          <div className={styles.socialHandles}>
            <span className={styles.socialLink}>
              <FaFacebook size={20} />
            </span>
            <span className={styles.socialLink}>
              <FaTwitter size={20} />
            </span>
            <span className={styles.socialLink}>
              <FaInstagram size={20} />
            </span>
          </div>
        </div>
        <div className={styles.mobile}>
          <span>
            {open ? (
              <FaTimes
                size={20}
                onClick={() => {
                  setOpen(false);
                }}
              />
            ) : (
              <FaBars
                size={20}
                onClick={() => {
                  setOpen(true);
                }}
              />
            )}
          </span>
          <span>
          <Search size={20} />
          </span>
          {open && (
            <div className={styles.mobileNav}>
              <div className={styles.mobileMenu}>
                {menu.map((item, i) => {
                  return (
                    <a key={i} href={item.url}>
                      <span className={styles.navLink}>{item.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
