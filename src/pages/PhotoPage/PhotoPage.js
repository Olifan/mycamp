import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import GalleryPrew from '../../components/GalleryPrew/GalleryPrew';
import FsLightbox from "fslightbox-react";
import ContentService from '../../services/ContentService';


const PhotoPage = () => {

  const contentService = new ContentService();

  const toogle = false;

  const [showSlider, setShowSlider] = useState(toogle);
  const [data, setData] = useState();

  useEffect(() => {
    contentService.getPhotoPage().then((response) => {
      setData(response);
    });
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setShowSlider(!showSlider);
    console.log(data);
  }

  const photoAlbums = data && data.data.attributes.photo_albums.data.map(photoAlbum => {
    return(
      <>
        <div  className={styles.photoPageContent}>
          <div onClick = {handleClick}>
            <GalleryPrew
              title={photoAlbum.attributes.title}
              coverImg={photoAlbum.attributes.coverPhoto.data.attributes.url}
              miniPrewItems={photoAlbum.attributes.prewThumb.data.map(prewThumb => {
                return(prewThumb.attributes.url)
              })}
            />
          </div>
        
          <FsLightbox
            toggler = {showSlider}
            sources = {photoAlbum.attributes.photos.data.map(photos => {
              return(photos.attributes.url)
            })}
          />
        </div>
      </>
    )
  })

  return(
    <div className={styles.photoPage}>
      <PageTitle
        title="Фото"
        description="Today. Tomorrow. Allways."
      />
      {photoAlbums}
      
      {/* <div  className={styles.photoPageContent}>
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
          sources = {data && data.data.attributes.photo_albums.data.map(photo => {
            return(
              photo.attributes.photos.data.attributes.url
            )
          })}
        />
      </div> */}

    </div>
  );
};

PhotoPage.propTypes = {};

PhotoPage.defaultProps = {};

export default PhotoPage;
