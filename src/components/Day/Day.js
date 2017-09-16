import React from "react";

import styles from './Day.css';

const Day = ({ date = 1, color = "blue" }) => {
  return (
    <div className={styles.root} style={{ backgroundColor: color }}>
      {date}
    </div>
  );
};

export default Day;
