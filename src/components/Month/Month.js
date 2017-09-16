import React from "react";
import moment from 'moment';

import MonthHeader from '../MonthHeader';

import { getLastDateOfMonth } from '../../helpers';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Month = ({ startDate, dayCount = getLastDateOfMonth(startDate) - startDate.date() + 1}) => {
  if (dayCount <= 0) return null;

  return (
    <div>
      <MonthHeader month={months[startDate.month()]} year={startDate.year()} />
    </div>
  );
};

export default Month;
