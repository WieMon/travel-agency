import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {


  render() {
    const {currentValue, setOptionValue} = this.props;

    return (
      <DatePicker
        className={styles.date}
        selected={currentValue}
        onChange={setOptionValue}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
