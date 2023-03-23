import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import PropTypes from 'prop-types';
import styles from './AboutPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import CardWithText from '../../components/CardWithText/CardWithText';
import ContentService from '../../services/ContentService';
import PalaroidPhoto from '../../components/PalaroidPhoto/PalaroidPhoto';
import Registration from '../../components/Registration/Registration';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

const AboutPage = () => {

  const contentService = new ContentService();

  const [data, setData] = useState(null);

  useEffect(() => {
    contentService.getAboutPage().then((response) => {
      setData(response);
    });
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className={styles.aboutPage}>
      <PageTitle
        title="Про нас"
        description="Today. Tomorrow. Allways."
      />
      <div className={styles.aboutPageContent}>
        <CardWithText
          title={data && data.data.attributes.OurMission.title}
          text={data && data.data.attributes.OurMission.description}
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
        />
        <PalaroidPhoto
          caption={data && data.data.attributes.OurMissionPhoto.title}
          srcImg={data && data.data.attributes.OurMissionPhoto.photo.data.attributes.url}
          size="middleImg"
          turn="turnRight"
        />
        <PalaroidPhoto
          caption={data && data.data.attributes.AboutCampPhoto.title}
          srcImg={data && data.data.attributes.AboutCampPhoto.photo.data.attributes.url}
          size="middleImg"
          turn="turnLeft"
        />
        <CardWithText
          title={data && data.data.attributes.AboutCamp.title}
          text={data && data.data.attributes.AboutCamp.description}
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
        />
        <CardWithText
          title={data && data.data.attributes.MedicalCare.title}
          text={data && data.data.attributes.MedicalCare.description}
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
        />
        <PalaroidPhoto
          caption={data && data.data.attributes.MedicalCarePhoto.title}
          srcImg={data && data.data.attributes.MedicalCarePhoto.photo.data.attributes.url}
          size="middleImg"
          turn="turnRight"
        />
        <PalaroidPhoto
          caption={data && data.data.attributes.RestWithUsPhoto.title}
          srcImg={data && data.data.attributes.RestWithUsPhoto.photo.data.attributes.url}
          size="middleImg"
          turn="turnLeft"
        />
        <CardWithText
          title={data && data.data.attributes.RestWithUs.title}
          text={<ReactMarkdown 
            rehypePlugins={[rehypeRaw]}
            children={data && data.data.attributes.RestWithUs.description}
          />}
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
        />
        
        <CardWithText
          className={styles.wideCard}
          title={data && data.data.attributes.Questions.title}
          text={<ReactMarkdown 
            rehypePlugins={[rehypeRaw]}
            children={data && data.data.attributes.Questions.description}
          />}
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
        />
      </div>
      <Registration
        registrationDate="21-29 грудня"
        registrationOpen="Реєстрація відкрита"
        registrationSeason="Зима 2023"
      />
      <Navigation/>
      <Footer/>
    </div>
  )
  
};

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
