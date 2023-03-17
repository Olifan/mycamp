import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardWithText.module.css';

const CardWithText = ({icon, title, text, className}) => (
  <div className={` ${className}`}>
    <img className={styles.icon} src={icon} loading="lazy" alt=''/>
    <div className={styles.textBlock}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
);

CardWithText.propTypes = {
  className: PropTypes.string,
};

CardWithText.defaultProps = {
  className: `${styles.cardWithText}`
};

export default CardWithText;
