import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardOfProgram.module.css';

const CardOfProgram = ({programTime, programTitle, programDescription}) => (
  <div className={styles.CardOfProgram}>
    <h4 className={styles.programTime}>
      {programTime}
    </h4>
    <h4 className={styles.programTitle}>
      {programTitle}
    </h4>
    <p className={styles.programDescription}>
      {programDescription}
    </p>
  </div>
);

CardOfProgram.propTypes = {};

CardOfProgram.defaultProps = {
  programTime: "8:00",
  programTitle: "Підйом",
  programDescription: "Може бути і пізніше"
};

export default CardOfProgram;
