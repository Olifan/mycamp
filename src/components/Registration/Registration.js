import React from 'react';
import PropTypes from 'prop-types';
import styles from './Registration.module.css';

const Registration = ({registrationDate, registrationOpen, registrationSeason}) => (
  <div className={styles.Registration}>
    <h5 className={styles.registrationDate}>
      {registrationDate}
    </h5>
    <a className={styles.registrationButton}>
      {registrationOpen}
    </a>
    <h5 className={styles.registrationDate}>
      {registrationSeason}
    </h5>
  </div>
);

Registration.propTypes = {};

Registration.defaultProps = {
  registrationDate: "21-29 грудня",
  registrationOpen: "Реєстрація відкрита",
  registrationSeason: "Зима 2023"
};

export default Registration;
