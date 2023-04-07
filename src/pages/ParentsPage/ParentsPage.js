import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ParentsPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import CardWithText from "../../components/CardWithText/CardWithText";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Registration from "../../components/Registration/Registration";
import Footer from "../../components/Footer/Footer";
import ContentService from "../../services/ContentService";
import Navigation from "../../components/Navigation/Navigation";

const ParentsPage = () => {
	const contentService = new ContentService();

	const [data, setData] = useState();

	useEffect(() => {
		contentService.getParentsPage().then((response) => {
			setData(response);
		});
		window.scrollTo(0, 0);
	}, []);

	const forParent =
		data &&
		data.data.attributes.for_parents.data.map((forParents) => {
			return (
				<CardWithText
					title={forParents.attributes.title}
					text={<ReactMarkdown rehypePlugins={[rehypeRaw]} children={forParents.attributes.description} />}
					icon={forParents.attributes?.icon?.data?.attributes?.url}
				/>
			);
		});

	return (
		<div className={styles.parentsPage}>
			<PageTitle title={data?.data.attributes.pageTitle.title} description={data?.data.attributes.pageTitle.subtitle} />

			<div className={styles.parentsContent}>{forParent}</div>

			<Registration />

			<Navigation />

			<Footer />
		</div>
	);
};

ParentsPage.propTypes = {};

ParentsPage.defaultProps = {};

export default ParentsPage;
