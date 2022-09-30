import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardNavigation.module.css';

const CardNavigation = ({linkTitle, linkDescription, linkIcon}) => (
  <a className={styles.CardNavigation} href="#">
    <img className={styles.linkIcon} src={linkIcon}/> 
    <div className={styles.linkContent}>
      <h2>{linkTitle}</h2>
      <p className={styles.linkDescription}>{linkDescription}</p>
    </div>
  </a>
);

CardNavigation.propTypes = {};

CardNavigation.defaultProps = {};

export default CardNavigation;
