import React from "react";
import moment from 'moment';

import { getLastDateOfMonth } from '../../helpers';

const Month = ({ startDate, dayCount = getLastDateOfMonth(startDate) - startDate.date() + 1}) => {
  if (dayCount == 0) return null;

  return (
    <div>
    </div>
  );
};

export default Month;
