import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryItem.module.css';

const GalleryItem = ({galleryImage}) => (
  <div className={styles.galleryItem}>
    <img className={styles.galleryImage} src={galleryImage}/> 
  </div>
);

GalleryItem.propTypes = {};

GalleryItem.defaultProps = {};

export default GalleryItem;
