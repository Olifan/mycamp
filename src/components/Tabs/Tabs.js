import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.css';

const Tabs = ({tabData}) => {

  return(
    <div className={styles.tabs}>
      <div className={styles.tab}>
        {tabData}
      </div>
    </div>
  )

};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
