import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./LocationPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import Registration from "../../components/Registration/Registration";
import Footer from "../../components/Footer/Footer";
import ContentService from "../../services/ContentService";
import CardWithText from "../../components/CardWithText/CardWithText";
import PalaroidPhoto from "../../components/PalaroidPhoto/PalaroidPhoto";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import FsLightbox from "fslightbox-react";

const LocationPage = () => {
	const contentService = new ContentService();

	const [showSliderTerritory, setShowSliderTerritory] = useState(false);
	const [showSliderFood, setShowSliderFood] = useState(false);
	const [showSliderRooms, setShowSliderRooms] = useState(false);

	const [currentLocationsId, setCurrentLocationsId] = useState(null);

	const [data, setData] = useState();

	useEffect(() => {
		contentService.getLocationPage().then((responce) => {
			setData(responce);
		});
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		setShowSliderTerritory();
		setShowSliderFood();
		setShowSliderRooms();
	}, [currentLocationsId]);

	const handleClickTerritory = (locationsId) => {
		setShowSliderTerritory(!showSliderTerritory);
		setCurrentLocationsId(locationsId);
	};

	const handleClickFood = (locationsId) => {
		setShowSliderFood(!showSliderFood);
		setCurrentLocationsId(locationsId);
	};

	const handleClickRooms = (locationsId) => {
		setShowSliderRooms(!showSliderRooms);
		setCurrentLocationsId(locationsId);
	};

	const locations =
		data &&
		data.data?.attributes?.locations?.data?.map((location) => {
			return (
				<div className={styles.locationContent}>
					<div className={styles.locationTitle}>{location?.attributes?.headTitle}</div>

					{/* Territory */}

					<div className={styles.accommodation}>
						<CardWithText
							title={location?.attributes?.territory?.title}
							text={
								<ReactMarkdown rehypePlugins={[rehypeRaw]} children={location?.attributes?.territory?.description} />
							}
						/>
						<div className={styles.accommodationPhoto} onClick={() => handleClickTerritory(location.id)}>
							<PalaroidPhoto
								srcImg={location?.attributes?.territoryCover?.data?.attributes?.url}
								size="largeImg"
								turn="turnRight"
							/>
						</div>
					</div>

					{currentLocationsId === location.id && (
						<FsLightbox
							toggler={showSliderTerritory}
							sources={location?.attributes?.territoryPhoto?.data?.map((photos) => {
								return photos?.attributes?.url;
							})}
						/>
					)}

					{/* Rooms */}

					<div className={styles.accommodation}>
						<div className={styles.accommodationPhoto} onClick={() => handleClickRooms(location.id)}>
							<PalaroidPhoto
								srcImg={location?.attributes?.roomsCover?.data?.attributes?.url}
								size="largeImg"
								turn="turnRight"
							/>
						</div>
						<CardWithText
							title={location?.attributes?.rooms?.title}
							text={<ReactMarkdown rehypePlugins={[rehypeRaw]} children={location?.attributes?.rooms?.description} />}
						/>
					</div>

					{currentLocationsId === location.id && (
						<FsLightbox
							toggler={showSliderRooms}
							sources={location?.attributes?.roomsPhoto?.data?.map((photos) => {
								return photos.attributes.url;
							})}
						/>
					)}

					{/* Food */}

					<div className={styles.accommodation}>
						<CardWithText
							title={location?.attributes?.food?.title}
							text={<ReactMarkdown rehypePlugins={[rehypeRaw]} children={location?.attributes?.food?.description} />}
						/>
						<div className={styles.accommodationPhoto} onClick={() => handleClickFood(location.id)}>
							<PalaroidPhoto
								srcImg={location?.attributes?.foodCover?.data?.attributes?.url}
								size="largeImg"
								turn="turnLeft"
							/>
						</div>
					</div>

					{currentLocationsId === location.id && (
						<FsLightbox
							toggler={showSliderFood}
							sources={location?.attributes?.foodPhoto?.data?.map((photos) => {
								return photos.attributes.url;
							})}
						/>
					)}
				</div>
			);
		});

	return (
		<div className={styles.locationPage}>
			<PageTitle title="Розташування" description="Місце проведення табору" />

			{locations}

			<Registration
				registrationDate="21-29 грудня"
				registrationOpen="Реєстрація відкрита"
				registrationSeason="Зима 2023"
			/>

			<Footer />
		</div>
	);
};

LocationPage.propTypes = {};

LocationPage.defaultProps = {};

export default LocationPage;
