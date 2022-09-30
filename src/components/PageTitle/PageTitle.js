import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTitle.module.css';
import mycampLogo from '../../images/mycampLogo.jpg';

const PageTitle = ({title, description}) => (
  <div className={styles.PageTitle}> 
    <div>
      <img className={styles.logo} src={mycampLogo} alt='logo'/>
      <h1 className={styles.title}>{title}</h1>
      <h6 className={styles.description}>{description}</h6>
    </div> 
  </div>
);

PageTitle.propTypes = {};

PageTitle.defaultProps = {};

export default PageTitle;
