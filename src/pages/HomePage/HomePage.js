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
						linkTitle="Розташування"
						linkDescription="In the middle of..."
						iconLocation="iconLeft"
						linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e90516682d7c1ce06ca27b_streamlinehq-travel-map-maps-travel-250-3.SVG"
					/>
				</Link>

				<PalaroidPhoto caption="Summer 2022" turn="turnRight" size="middleImg" srcImg="testPhoto.jpeg" />
				<Link to="/our-team">
					<CardNavigation
						size="circle"
						linkTitle="Команда"
						linkDescription="Сім'я"
						linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8fa9930bdfe5c8b4ef6ad_streamlinehq-interface-user-multiple-interface-essential-250.SVG"
					/>
				</Link>

				{/* Row 4 */}
				<PalaroidPhoto caption="Summer 2022" turn="turnLeft" size="middleImg" srcImg="testPhoto.jpeg" />
				<Link to="/photo">
					<CardNavigation
						size="large"
						linkTitle="Фото"
						linkDescription="Цікаві моменти"
						linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f4544af443508a817eac_streamlinehq-image-camera-1-images-photography-250.SVG"
					/>
				</Link>

				<PalaroidPhoto caption="Summer 2022" turn="turnRight" size="middleImg" srcImg="testPhoto.jpeg" />
				{/* Row 5 */}
				<Link to="/contacts">
					<CardNavigation
						size="wide"
						linkTitle="Контакти"
						linkDescription="Майже цілодобово"
						linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e9862e0dcf927adce2de5c_streamlinehq-phone-telephone-ringing-phone-250.SVG"
					/>
				</Link>

				<PalaroidPhoto caption="Summer 2022" turn="turnRight" size="middleImg" srcImg="testPhoto.jpeg" />

				<Link to="/for-parents">
					<CardNavigation
						linkTitle="Партнерам"
						linkDescription="Допомога і підтримка"
						iconLocation="iconRight"
						linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f3a6fcf13cc3390a727e_streamlinehq-shopping-cloth-accessories-tall-hat-money-shopping-250.SVG"
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
