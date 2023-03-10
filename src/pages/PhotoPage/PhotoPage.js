import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import GalleryPrew from '../../components/GalleryPrew/GalleryPrew';

const PhotoPage = () => {
  return(
    <div className={styles.photoPage}>
      <PageTitle
        title="Фото"
        description="Today. Tomorrow. Allways."
      />
      <div className={styles.photoPageContent}>
        <GalleryPrew
          title="Summer"
          coverImg="testPhoto.jpeg"
          miniPrewItems={["testPhoto.jpeg", "testPhoto.jpeg", "testPhoto.jpeg"]}
        />
        <GalleryPrew
          title="Winter"
          coverImg="testPhoto.jpeg"
          miniPrewItems={["testPhoto.jpeg", "testPhoto.jpeg", "testPhoto.jpeg"]}
        />
      </div>

    </div>
  );
};

PhotoPage.propTypes = {};

PhotoPage.defaultProps = {};

export default PhotoPage;
