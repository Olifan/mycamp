import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryItem.module.css';

const GalleryItem = ({galleryItem}) => (
  <div className={styles.galleryItems}>
    <img className={styles.galleryItem} src={galleryItem}/> 
  </div>
);

GalleryItem.propTypes = {};

GalleryItem.defaultProps = {};

export default GalleryItem;
