import VerticalCard from "../../cards/vertical";
import styles from "./threeColGrid.module.scss";

export default function ThreeColGrid({ data }) {
  return (
    <div id="new" className={styles.threecolGrid}>
      <div className={styles.gridTitle}>
        <h3 className="container">What's New?</h3>
      </div>
      <div className={styles.gridWrapper}>
        {data.slice(0, 9).map((res, i) => {
          return <VerticalCard key={i} data={res} />;
        })}
      </div>
    </div>
  );
}
