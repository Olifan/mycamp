import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTitle.module.css';
import mycampLogo from '../../images/mycampLogo.jpg';
import { Link } from 'react-router-dom';

const PageTitle = ({title, description}) => (
  <div className={styles.pageTitle}> 
    <div>
      <Link to = "/">
        <img className={styles.logo} src={mycampLogo} alt='logo'/>
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <h6 className={styles.description}>{description}</h6>
    </div> 
  </div>
);

PageTitle.propTypes = {};

PageTitle.defaultProps = {};

export default PageTitle;
