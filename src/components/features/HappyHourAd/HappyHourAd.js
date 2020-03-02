import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.number,
  }

  render () {
    const {title} = this.props;

    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>
        </div>
      </div>
    );
  }
}

export default HappyHourAd;
