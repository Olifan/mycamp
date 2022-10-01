import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardNavigation.module.css';

const CardNavigation = ({linkTitle, linkDescription, linkIcon, size}) => (
  <a className={`${styles.CardNavigation} ${styles[size]}`} href="#">
    <img className={styles.linkIcon} src={linkIcon} loading='lazy' alt='icon'/> 
    <div className={styles.linkContent}>
      <h2 className={styles.linkTitle}>{linkTitle}</h2>
      <p className={styles.linkDescription}>{linkDescription}</p>
    </div>
  </a>
);

CardNavigation.propTypes = {};

CardNavigation.defaultProps = {};

export default CardNavigation;
