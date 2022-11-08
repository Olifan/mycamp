import React from 'react';
import PropTypes from 'prop-types';
import styles from './RegistrationPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return(
    <div className={styles.registrationPage}>
      <PageTitle
        title="Registration"
        description="Today. Tomorrow. Allways."
      />
      <RegistrationForm/>
  </div>
  );
};

RegistrationPage.propTypes = {};

RegistrationPage.defaultProps = {};

export default RegistrationPage;
