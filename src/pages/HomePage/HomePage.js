import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./HomePage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import PalaroidPhoto from "../../components/PalaroidPhoto/PalaroidPhoto";
import Registration from "../../components/Registration/Registration";
import CardNavigation from "../../components/CardNavigation/CardNavigation";
import Footer from "../../components/Footer/Footer";
import ContentService from "../../services/ContentService";
import { Link } from "react-router-dom";

const HomePage = () => {
	const contentService = new ContentService();

	const [data, setData] = useState(null);

	useEffect(() => {
		contentService.getHomePage().then((response) => {
			setData(response);
		});
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.homePage}>
			<div className={styles.header}>
				<PageTitle
					title={data?.data.attributes.pageTitle.title}
					description={data?.data.attributes.pageTitle.subtitle}
				/>
				<div className={`${styles.blockAbsolute} ${styles.photoLeft}`}>
					{data && (
						<PalaroidPhoto
							caption={data?.data.attributes.polaroidPhotoHeaderLeft.title}
							turn="turnLeft"
							size="middleImg"
							srcImg={data?.data.attributes.polaroidPhotoHeaderLeft.photo.data.attributes.url}
						/>
					)}
				</div>
				<div className={`${styles.blockAbsolute} ${styles.photoRight}`}>
					<PalaroidPhoto
						caption={data?.data.attributes.polaroidPhotoHeaderRight.title}
						turn="turnRight"
						size="middleImg"
						srcImg={data?.data.attributes.polaroidPhotoHeaderRight.photo.data.attributes.url}
					/>
				</div>
			</div>

			<Registration />

			<div className={styles.main}>
				{/* Row 1 */}

				<Link to="/camp-program">
					<CardNavigation
						size="wide"
						linkTitle={data?.data.attributes.campProgram.title}
						linkDescription={data?.data.attributes.campProgram.description}
						linkIcon={data?.data.attributes.campProgram.icon.data.attributes.url}
					/>
				</Link>

				<PalaroidPhoto
					caption={data?.data.attributes.palaroidFirstRow.title}
					turn="turnRight"
					size="middleImg"
					srcImg={data?.data.attributes.palaroidFirstRow.photo.data.attributes.url}
				/>

				<Link to="/about">
					<CardNavigation
						className={styles.iconRight}
						linkTitle={data?.data.attributes.about.title}
						linkDescription={data?.data.attributes.about.description}
						iconLocation="iconRight"
						linkIcon={data?.data.attributes.about.icon.data.attributes.url}
					/>
				</Link>

				{/* Row 2 */}

				<PalaroidPhoto
					caption={data?.data.attributes.palaroidSecondRowLeft.title}
					turn="turnLeft"
					size="middleImg"
					srcImg={data?.data.attributes.palaroidSecondRowLeft.photo.data.attributes.url}
				/>

				<Link to="/things">
					<CardNavigation
						size="large"
						linkTitle={data?.data.attributes.whatToTake.title}
						linkDescription={data?.data.attributes.whatToTake.description}
						linkIcon={data?.data.attributes.whatToTake.icon.data.attributes.url}
					/>
				</Link>

				<PalaroidPhoto
					caption={data?.data.attributes.palaroidSecondRowRight.title}
					turn="turnRight"
					size="middleImg"
					srcImg={data?.data.attributes.palaroidSecondRowRight.photo.data.attributes.url}
				/>

				{/* Row 3 */}

				<Link to="/location">
					<CardNavigation
						linkTitle={data?.data.attributes.location.title}
						linkDescription={data?.data.attributes.location.description}
						iconLocation="iconLeft"
						linkIcon={data?.data.attributes.location.icon.data.attributes.url}
					/>
				</Link>

				<PalaroidPhoto
					caption={data?.data.attributes.palaroidThirdRow.title}
					turn="turnRight"
					size="middleImg"
					srcImg={data?.data.attributes.palaroidThirdRow.photo.data.attributes.url}
				/>

				<Link to="/our-team">
					<CardNavigation
						size="circle"
						linkTitle={data?.data.attributes.team.title}
						linkDescription={data?.data.attributes.team.description}
						linkIcon={data?.data.attributes.team.icon.data.attributes.url}
					/>
				</Link>

				{/* Row 4 */}

				<PalaroidPhoto
					caption={data?.data.attributes.palaroidFourthRowLeft.title}
					turn="turnLeft"
					size="middleImg"
					srcImg={data?.data.attributes.palaroidFourthRowLeft.photo.data.attributes.url}
				/>
				<Link to="/photo">
					<CardNavigation
						size="large"
						linkTitle={data?.data.attributes.foto.title}
						linkDescription={data?.data.attributes.foto.description}
						linkIcon={data?.data.attributes.foto.icon.data.attributes.url}
					/>
				</Link>

				<PalaroidPhoto
					caption={data?.data.attributes.palaroidFourthRowRight.title}
					turn="turnRight"
					size="middleImg"
					srcImg={data?.data.attributes.palaroidFourthRowRight.photo.data.attributes.url}
				/>

				{/* Row 5 */}

				<Link to="/contacts">
					<CardNavigation
						size="wide"
						linkTitle={data?.data.attributes.contacts.title}
						linkDescription={data?.data.attributes.contacts.description}
						linkIcon={data?.data.attributes.contacts.icon.data.attributes.url}
					/>
				</Link>

				<PalaroidPhoto
					caption={data?.data.attributes.palaroidFifthRow.title}
					turn="turnRight"
					size="middleImg"
					srcImg={data?.data.attributes.palaroidFifthRow.photo.data.attributes.url}
				/>

				<Link to="/for-parents">
					<CardNavigation
						linkTitle={data?.data.attributes.forParents.title}
						linkDescription={data?.data.attributes.forParents.description}
						iconLocation="iconRight"
						linkIcon={data?.data.attributes.forParents.icon.data.attributes.url}
					/>
				</Link>
			</div>

			<Registration />

			<Footer />
		</div>
	);
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
