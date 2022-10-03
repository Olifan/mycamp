import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardWithText.module.css';

const CardWithText = ({icon, title, text}) => (
  <div className={styles.cardWithText}>
    <img className={styles.icon} src={icon} loading="lazy" alt='icon'/>
    <div className={styles.textBlock}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
);

CardWithText.propTypes = {};

CardWithText.defaultProps = {};

export default CardWithText;
