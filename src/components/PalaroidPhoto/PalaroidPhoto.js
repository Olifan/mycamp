import React from 'react';
import PropTypes from 'prop-types';
import styles from './PalaroidPhoto.module.css';

const PalaroidPhoto = () => (
  <div className={styles.PalaroidPhoto}>
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.polaroid}>
          <img src='testPhoto.jpeg'/>
          <div className={styles.caption}>
            Summer 2022
          </div>
        </div>  
      </div> 
    </div>
  </div>
);

PalaroidPhoto.propTypes = {};

PalaroidPhoto.defaultProps = {};

export default PalaroidPhoto;
