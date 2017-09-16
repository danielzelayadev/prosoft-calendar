import React from "react";

const Calendar = ({ startDate, dayCount, countryCode }) => {
  return (
    <div>
      {startDate}
      {countryCode}
      {dayCount}
    </div>
  );
};

export default Calendar;
