import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {formatPrice} from '../../../utils/formatPrice';
import settings from '../../../data/settings.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import Button from '../../common/Button/Button.js';

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  if(options.name != '' && options.contact != '') {
    const totalCost = formatPrice(calculateTotal(tripCost, options));

    const payload = {
      ...options,
      totalCost,
      tripId,
      tripName,
      countryCode,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else window.alert ('Please provide your name and contact information');
};

const OrderForm = ({options, setOrderOption, tripCost, tripId, tripName, countryCode}) => (

  <Row>
    {pricing.map(options =>
      <Col md={4} key={options.id}>
        <OrderOption {...options} currentValue={options[options.id]} setOrderOption={setOrderOption}/>

      </Col>
    )}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} />
      <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
