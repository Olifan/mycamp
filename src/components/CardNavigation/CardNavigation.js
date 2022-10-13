import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardNavigation.module.css';

const CardNavigation = ({
  linkTitle, 
  linkDescription, 
  linkIcon, 
  iconLocation, 
  size, 
  url
}) => (
  <a className={`${styles.cardNavigation} ${styles[size]}`} href={url}>
    <img className={`${styles.linkIcon} ${styles[iconLocation]}`} src={linkIcon} loading='lazy' alt='icon'/> 
    <div className={styles.linkContent}>
      <h3 className={styles.linkTitle}>{linkTitle}</h3>
      <p className={styles.linkDescription}>{linkDescription}</p>
    </div>
  </a>
);

CardNavigation.propTypes = {};

CardNavigation.defaultProps = {};

export default CardNavigation;
