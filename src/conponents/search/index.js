import { FaSearch , FaWindowClose } from "react-icons/fa";
import React, { useState } from "react";
import styles from "./search.module.css";

const Search = () => {
  const [SearchModal, setSearchModal] = useState(false);

  const handleClick = () => {
    setSearchModal(!SearchModal)
    if(!SearchModal){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }
  const [query, setQuery] =useState("");
  const onKeyUpHandle = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      window.location.href = "/search?q=" + e.target.value;
    }
  };
  return (
    <div>
      <div className={styles.Search}>
        <FaSearch
          onClick={handleClick}
        />
      </div>

      {SearchModal && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <FaWindowClose
              className={styles.searchClose}
              onClick={handleClick}
            />
            <form method="get" action="/">
            <input 
            type="search" 
            id="search"
            placeholder="Search here..." 
            className={styles.searchBox} 
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={onKeyUpHandle}
            required=""
            autoComplete="off"
            />
            <button type="submit" style={{visibility:"hidden"}}>Submit</button>
            <p className="message"> Type above and press <em>Enter</em> to search.</p>
            </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
