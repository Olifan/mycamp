import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./PhotoPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import GalleryPrew from "../../components/GalleryPrew/GalleryPrew";
import FsLightbox from "fslightbox-react";
import ContentService from "../../services/ContentService";
import Registration from "../../components/Registration/Registration";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

const PhotoPage = () => {
	const contentService = new ContentService();

	const [showSlider, setShowSlider] = useState(false);
	const [data, setData] = useState();
	const [currentAlbumId, setCurrentAlbumId] = useState(null);

	useEffect(() => {
		contentService.getPhotoPage().then((response) => {
			setData(response);
		});
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		setShowSlider();
	}, [currentAlbumId]);

	const handleClick = (albumId) => {
		setCurrentAlbumId(albumId);
		setShowSlider(!showSlider);
	};

	const photoAlbums =
		data &&
		data.data.attributes.photo_albums.data.map((photoAlbum) => {
			return (
				<>
					<div key={photoAlbum.id}>
						<div onClick={() => handleClick(photoAlbum.id)}>
							<GalleryPrew
								title={photoAlbum.attributes.title}
								coverImg={photoAlbum.attributes.coverPhoto.data.attributes.url}
								miniPrewItems={photoAlbum.attributes.prewThumb.data.map((prewThumb) => {
									return prewThumb.attributes.url;
								})}
							/>
						</div>

						{currentAlbumId === photoAlbum.id && (
							<FsLightbox
								toggler={showSlider}
								sources={photoAlbum.attributes.photos.data.map((photos) => {
									return photos.attributes.url;
								})}
							/>
						)}
					</div>
				</>
			);
		});

	return (
		<div className={styles.photoPage}>
			<PageTitle title={data?.data.attributes.pageTitle.title} description={data?.data.attributes.pageTitle.subtitle} />

			<div className={styles.photoPageContent}>{photoAlbums}</div>

			<Registration />
			<Navigation />
			<Footer />
		</div>
	);
};

PhotoPage.propTypes = {};

PhotoPage.defaultProps = {};

export default PhotoPage;
