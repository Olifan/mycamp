import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import GalleryPrew from '../../components/GalleryPrew/GalleryPrew';
import FsLightbox from "fslightbox-react";


const PhotoPage = () => {

  const toogle = false;

  const [showSlider, setShowSlider] = useState(toogle);

  const handleClick = () => {
    setShowSlider(!showSlider);
  }

  return(
    <div className={styles.photoPage}>
      <PageTitle
        title="Фото"
        description="Today. Tomorrow. Allways."
      />
      
      <div  className={styles.photoPageContent}>
        <div onClick = {handleClick}>
          <GalleryPrew
            title="Summer"
            coverImg="testPhoto.jpeg"
            miniPrewItems={["testPhoto.jpeg", "testPhoto.jpeg", "testPhoto.jpeg"]}
          />
        </div>
        
        <GalleryPrew
          title="Winter"
          coverImg="testPhoto.jpeg"
          miniPrewItems={["testPhoto.jpeg", "testPhoto.jpeg", "testPhoto.jpeg"]}
        />
        <FsLightbox
          toggler = {showSlider}
          sources = {['testPhoto.jpeg', 'testPhoto.jpeg']}
        />
      </div>

    </div>
  );
};

PhotoPage.propTypes = {};

PhotoPage.defaultProps = {};

export default PhotoPage;
