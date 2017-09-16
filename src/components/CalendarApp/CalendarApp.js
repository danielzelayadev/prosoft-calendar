import React, { Component } from "react";

import styles from './CalendarApp.css';

import Calendar from '../Calendar';

class CalendarApp extends Component {
  constructor() {
    super();

    this.state = {
      startDate: "08/15/08",
      dayCount: 30,
      countryCode: "US"
    };
  }
  onStartDateChange(e) {
    this.setState({ ...this.state, startDate: e.target.value });
  }
  onCountryCodeChange(e) {
    this.setState({ ...this.state, countryCode: e.target.value });
  }
  onDayCountChange(e) {
    this.setState({ ...this.state, dayCount: e.target.value });
  }
  render() {
    const { startDate, dayCount, countryCode } = this.state;
    const { onStartDateChange, onDayCountChange, 
            onCountryCodeChange } = this;

    return (
      <div className={styles.root}>
        <div className={styles.form}>
          <div className={styles['form-group']}>
            <label>Start Date</label>
            <input type="text" value={startDate} onChange={onStartDateChange.bind(this)} placeholder="08/15/08"/>
          </div>
          <div className={styles['form-group']}>
            <label>Day Count</label>
            <input type="number" min="1" value={dayCount} onChange={onDayCountChange.bind(this)} placeholder="1" />
          </div>
          <div className={styles['form-group']}>
            <label>Country Code</label>
            <input type="text" placeholder="US" value={countryCode} onChange={onCountryCodeChange.bind(this)}/>
          </div>
        </div>
        <div className={styles["calendar-area"]}>
          <Calendar startDate={startDate} dayCount={dayCount} countryCode={countryCode} />
        </div>
      </div>
    );
  }
}

export default CalendarApp;
