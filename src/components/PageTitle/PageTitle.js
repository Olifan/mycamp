import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTitle.module.css';
import mycampLogo from '../../images/mycampLogo.jpg';

const PageTitle = () => (
  <div className={styles.PageTitle}> 
    <div>
      <img src={mycampLogo} alt='logo'/>
      <h1 className={styles.title}>mycamp.</h1>
      <h6 className={styles.description}>Дитячий табір в Карпатах та Європі</h6>
    </div> 
  </div>
);

PageTitle.propTypes = {};

PageTitle.defaultProps = {};

export default PageTitle;
