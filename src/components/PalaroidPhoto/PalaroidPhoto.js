import React from 'react';
import PropTypes from 'prop-types';
import styles from './PalaroidPhoto.module.css';

const PalaroidPhoto = ({caption, turn, size, srcImg}) => (
        <div className={`${styles.polaroid} ${styles[turn]}`}>
          <img className={`${styles[size]}`} src={srcImg}/>
          <div className={styles.caption}>
            {caption}
          </div>
        </div>  
);

PalaroidPhoto.propTypes = {};

PalaroidPhoto.defaultProps = {
  caption: "Summer 2022",
  turn: "turnLeft",
  size: "middleImg",
  srcImg: "testPhoto.jpeg"
};

export default PalaroidPhoto;
