import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'}>none</Icon>
      </div>

    )}
    {values.map(value => (
      <div
        className={styles.icon + (currentValue === value.id ? ' ' + styles.iconActive : '')}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}> {value.name} ({formatPrice(value.price)}</Icon>
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes. string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
