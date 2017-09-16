import React from "react";
import moment from 'moment';

import styles from './Calendar.css';

import CalendarHeader from '../CalendarHeader';

const Calendar = ({ startDate = moment(), dayCount = 0, countryCode = "US" }) => {
  return (
    <div className={styles.root}>
      <CalendarHeader />
    </div>
  );
};

export default Calendar;
