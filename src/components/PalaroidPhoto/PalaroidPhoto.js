import React from 'react';
import PropTypes from 'prop-types';
import styles from './PalaroidPhoto.module.css';

const PalaroidPhoto = ({caption}) => (
  <div className={styles.PalaroidPhoto}>
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.polaroid}>
          <img src='testPhoto.jpeg'/>
          <div className={styles.caption}>
            {caption}
          </div>
        </div>  
      </div> 
    </div>
  </div>
);

PalaroidPhoto.propTypes = {};

PalaroidPhoto.defaultProps = {
  caption: "Summer 2022"
};

export default PalaroidPhoto;
