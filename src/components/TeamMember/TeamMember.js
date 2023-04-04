import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeamMember.module.css';

const TeamMember = ({memberPhoto, memberName, memberTitle, stickerTapeSrc}) => (
  <div className={styles.teamMember}>
    <img className={styles.memberPhoto} src={memberPhoto} loading="lazy" alt="Photo"/>
    <div className={styles.memberContent}>
      <h2 className={styles.memberName}>
        {memberName}
      </h2>
      <h5 className={styles.memberTitle}>
        {memberTitle}
      </h5>
    </div>
    <img className={styles.stickerTape} src={stickerTapeSrc} loading="lazy"/>
  </div>
);

TeamMember.propTypes = {};

TeamMember.defaultProps = {};

export default TeamMember;
