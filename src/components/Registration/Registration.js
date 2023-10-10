import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Registration.module.css";
import { Link } from "react-router-dom";
import ContentService from "../../services/ContentService";


const Registration = ({ registrationDate, registrationOpen, registrationSeason }) => {
	const contentService = new ContentService();

	const [data, setData] = useState(null);

	useEffect(() => {
		contentService.getHomePage().then((response) => {
			setData(response);
		});
	}, []);

	return (
		<div className={styles.registration}>
			<h5 className={styles.registrationDate}>{data?.data.attributes.registration.registrationDate}</h5>
			<Link to={"/registration"} className={styles.registrationButton}>
				{data?.data.attributes.registration.registrationOpen}
			</Link>
			<h5 className={styles.registrationDate}>{data?.data.attributes.registration.registrationSeason}</h5>
		</div>
	);
};

Registration.propTypes = {};

Registration.defaultProps = {};

export default Registration;
