import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';

const AboutPage = () => {

  return(
    <div className={styles.AboutPage}>
      <PageTitle
        title="Про нас"
        description="Today. Tomorrow. Allways."
      />
    </div>
  )
  
};

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
