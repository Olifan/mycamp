import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.css';

const Tabs = ({tabData, isActive, onClick}) => {

  return(
    <div className={styles.tabs}>
      <div className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onClick}>
        {tabData}
      </div>
    </div>
  )

};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
