import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';

const Gallery = ({galleryItem}) => (
  <div className={styles.gallery}>
    <img className={styles.galleryItem} src={galleryItem}/> 
  </div>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
