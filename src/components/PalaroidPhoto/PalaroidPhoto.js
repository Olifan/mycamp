import React from 'react';
import PropTypes from 'prop-types';
import styles from './PalaroidPhoto.module.css';

const PalaroidPhoto = ({caption, turn, size, srcImg}) => (
        <div className={`${styles.polaroid} ${styles[turn]}`}>
          <img className={`${styles[size]}`} src={srcImg}/>
          <h5 className={styles.caption}>
            {caption}
          </h5>
        </div>  
);

PalaroidPhoto.propTypes = {};

PalaroidPhoto.defaultProps = {};

export default PalaroidPhoto;
