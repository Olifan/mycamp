import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardTakeNotTake.module.css';

const CardTakeNotTake = ({icon, title}) => (
  <div className={styles.cardTakeNotTake}>
    <img className={styles.iconToTake} src={icon} loading="lazy" alt=''/>
    <p>{title}</p>
  </div>
);

CardTakeNotTake.propTypes = {};

CardTakeNotTake.defaultProps = {};

export default CardTakeNotTake;
