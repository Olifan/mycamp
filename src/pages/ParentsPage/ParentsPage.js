import React from "react";
import PropTypes from "prop-types";
import styles from "./ParentsPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import CardWithText from "../../components/CardWithText/CardWithText";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Registration from "../../components/Registration/Registration";
import Footer from "../../components/Footer/Footer";

const ParentsPage = () => {
	return (
    <div className={styles.parentsPage}>

      <PageTitle
        title="Для батьків"
        description="Today. Tomorrow. Allways."
      />

      <div className={styles.parentsContent}>
        <CardWithText
          title={""}
          text={<ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={""}
          />}
          icon={""}
        />
        <CardWithText
          title={""}
          text={<ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={""}
          />}
          icon={""}
        />
      </div>

      <Registration
				registrationDate="21-29 грудня"
				registrationOpen="Реєстрація відкрита"
				registrationSeason="Зима 2023"
			/>

			<Footer />
    </div>
  );
};

ParentsPage.propTypes = {};

ParentsPage.defaultProps = {};

export default ParentsPage;
