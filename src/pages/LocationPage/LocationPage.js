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

	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
		sources: [],
	});

	const [data, setData] = useState();

	useEffect(() => {
		contentService.getLocationPage().then((responce) => {
			setData(responce);
		});
		window.scrollTo(0, 0);
	}, []);
	
	const openLightbox = (sourceIndex, rawSources) => {
		const sources = rawSources.data.map((source) => source.attributes.url);
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: sourceIndex + 1,
			sources: sources,
		});
	};

	const closeLightbox = () => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: 1,
			sources: [],
		});
	};

	const locations =
		data &&
		data.data?.attributes?.locations?.data?.map((location, index) => {
			return (
				<div className={styles.locationContent} key={index}>
					<div className={styles.locationTitle}>{location?.attributes?.headTitle}</div>

					{/* Territory */}

					<div className={styles.accommodation}>
						<CardWithText
							title={location?.attributes?.territory?.title}
							text={
								<ReactMarkdown rehypePlugins={[rehypeRaw]} children={location?.attributes?.territory?.description} />
							}
						/>
						<div className={styles.accommodationPhoto} onClick={() => openLightbox(0, location?.attributes?.foodPhoto)}>
							<PalaroidPhoto
								srcImg={location?.attributes?.territoryCover?.data?.attributes?.url}
								size="largeImg"
								turn="turnRight"
							/>
						</div>
					</div>

					{/* Rooms */}

					<div className={styles.accommodation}>
						<div className={styles.accommodationPhoto} onClick={() => openLightbox(0, location?.attributes?.roomsPhoto)}>
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

					{/* Food */}

					<div className={styles.accommodation}>
						<CardWithText
							title={location?.attributes?.food?.title}
							text={<ReactMarkdown rehypePlugins={[rehypeRaw]} children={location?.attributes?.food?.description} />}
						/>
						<div className={styles.accommodationPhoto} onClick={() => openLightbox(0, location?.attributes?.territoryPhoto)}>
							<PalaroidPhoto
								srcImg={location?.attributes?.foodCover?.data?.attributes?.url}
								size="largeImg"
								turn="turnLeft"
							/>
						</div>
					</div>

				</div>
			);
		});

	return (
		<div className={styles.locationPage}>
			<PageTitle title="Розташування" description="Місце проведення табору" />

			{locations}

			<FsLightbox
				toggler={lightboxController.toggler}
				sources={lightboxController.sources}
				slide={lightboxController.slide}
				onClose={closeLightbox}
			/>

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
