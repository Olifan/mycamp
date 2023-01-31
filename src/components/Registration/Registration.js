import React from 'react';
import PropTypes from 'prop-types';
import styles from './Registration.module.css';
import { Link } from 'react-router-dom';

const Registration = ({registrationDate, registrationOpen, registrationSeason}) => (
  <div className={styles.registration}>
    <h5 className={styles.registrationDate}>
      {registrationDate}
    </h5>
    <Link to={'/registration-page'} className={styles.registrationButton}>
      {registrationOpen}
    </Link>
    <h5 className={styles.registrationDate}>
      {registrationSeason}
    </h5>
  </div>
);

Registration.propTypes = {};

Registration.defaultProps = {};

export default Registration;
