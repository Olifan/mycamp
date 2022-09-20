import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTitle.module.css';

const PageTitle = () => (
  <div className={styles.PageTitle}>
    <img src='logo192.png'/>
    <h1>mycamp</h1>
  </div>
);

PageTitle.propTypes = {};

PageTitle.defaultProps = {};

export default PageTitle;
