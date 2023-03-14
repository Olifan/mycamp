import React from "react";
import PropTypes from "prop-types";
import styles from "./LocationPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import Registration from "../../components/Registration/Registration";
import Footer from "../../components/Footer/Footer";

const LocationPage = () => {
	return (
		<div className={styles.locationPage}>
			<PageTitle title="Розташування" description="Місце проведення табору" />

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
