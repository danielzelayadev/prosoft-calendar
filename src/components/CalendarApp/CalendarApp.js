import React, { Component } from "react";

import styles from './CalendarApp.css';

class CalendarApp extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.form}>
          <div className={styles['form-group']}>
            <label>Start Date</label>
            <input type="text" placeholder="08/15/08"/>
          </div>
          <div className={styles['form-group']}>
            <label>Day Count</label>
            <input type="number" min="1" placeholder="1" />
          </div>
          <div className={styles['form-group']}>
            <label>Country Code</label>
            <input type="text" placeholder="US"/>
          </div>
          <button>Create Calendar</button>
        </div>
        <div className={styles["calendar-area"]}>Calendar Area</div>
      </div>
    );
  }
}

export default CalendarApp;
