import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import PropTypes from "prop-types";
import styles from "./ContactsPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import Registration from "../../components/Registration/Registration";
import Footer from "../../components/Footer/Footer";
import CardWithText from "../../components/CardWithText/CardWithText";
import ContentService from "../../services/ContentService";
import Navigation from "../../components/Navigation/Navigation";

const ContactsPage = () => {
	const contentService = new ContentService();

	const [data, setData] = useState();

	useEffect(() => {
		contentService.getContactsPage().then((response) => {
			setData(response);
		});
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.сontactsPage}>
			<div>
				<PageTitle
					title={data?.data.attributes.pageTitle.title}
					description={data?.data.attributes.pageTitle.subtitle}
				/>
			</div>

			<div className={styles.contactsContent}>
				<CardWithText
					className={styles.cardWithTextMod}
					title={data && data.data.attributes.commonQuestions.title}
					text={
						<ReactMarkdown
							rehypePlugins={[rehypeRaw]}
							children={data && data.data.attributes.commonQuestions.description}
						/>
					}
					icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
				/>

				<div className={styles.contactsBlock}>
					<CardWithText
						className={styles.cardWithTextContact}
						title={data && data.data.attributes.contacts.title}
						text={
							<ReactMarkdown rehypePlugins={[rehypeRaw]} children={data && data.data.attributes.contacts.description} />
						}
						icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
					/>
				</div>
			</div>

			<Registration />

			<Navigation />

			<Footer />
		</div>
	);
};

ContactsPage.propTypes = {};

ContactsPage.defaultProps = {};

export default ContactsPage;
