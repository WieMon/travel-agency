import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = () => {

  const [currentValue, setOptionValue] = useState(new Date());

  return (
    <DatePicker
      className={styles.input}
      selected={currentValue}
      onChange={date => setOptionValue(date)}
    />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
