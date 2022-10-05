import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryPrew.module.css';

const GalleryPrew = ({title, linkToGallery, coverImg}) => (
  <div className={styles.galleryPrew}>
    <h4 className={styles.title}>{title}</h4> 
    <a href={linkToGallery}>
      <img className={styles.galleryCover} src={coverImg}/>
    </a>
  </div>
);

GalleryPrew.propTypes = {};

GalleryPrew.defaultProps = {};

export default GalleryPrew;
