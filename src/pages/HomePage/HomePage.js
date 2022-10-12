import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import PalaroidPhoto from '../../components/PalaroidPhoto/PalaroidPhoto';
import Registration from '../../components/Registration/Registration';
import CardNavigation from '../../components/CardNavigation/CardNavigation';
import Footer from '../../components/Footer/Footer';

const HomePage = () => (
  <div className={styles.homePage}>
    <div className={styles.header}>
      <PageTitle
        title="mycamp."
        description="Дитячий табір в Карпатах та Європі"
      />
      <div className={`${styles.blockAbsolute} ${styles.photoLeft}`}>
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnLeft"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />
      </div>
      <div className={`${styles.blockAbsolute} ${styles.photoRight}`}>
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnRight"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />
      </div>
    </div>

    <Registration
      registrationDate="21-29 грудня"
      registrationOpen="Реєстрація відкрита"
      registrationSeason="Зима 2023"
    />

    <div className={styles.main}>
      {/* Row 1 */}  
      <CardNavigation
        url="#"
        size="wide"
        linkTitle="Camp program"
        linkDescription="From wake-up to sleep"
        linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
      />
      <PalaroidPhoto
        caption="Summer 2022"
        turn="turnRight"
        size="middleImg"
        srcImg="testPhoto.jpeg"
      />
      <CardNavigation
        url="#"
        size="large"
        linkTitle="Camp program"
        linkDescription="From wake-up to sleep"
        linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
      />
      {/* Row 2 */} 
      <PalaroidPhoto
        caption="Summer 2022"
        turn="turnRight"
        size="middleImg"
        srcImg="testPhoto.jpeg"
      />
      <CardNavigation
        url="#"
        size="large"
        linkTitle="Camp program"
        linkDescription="From wake-up to sleep"
        linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
      />
      <PalaroidPhoto
        caption="Summer 2022"
        turn="turnRight"
        size="middleImg"
        srcImg="testPhoto.jpeg"
      />
      {/* Row 3 */} 
      <CardNavigation
        url="#"
        size="large"
        linkTitle="Camp program"
        linkDescription="From wake-up to sleep"
        linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
      />
      <PalaroidPhoto
        caption="Summer 2022"
        turn="turnRight"
        size="middleImg"
        srcImg="testPhoto.jpeg"
      />
      <CardNavigation
        url="#"
        size="circle"
        linkTitle="Camp program"
        linkDescription="From wake-up to sleep"
        linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
      />
      {/* Row 4 */} 
      <PalaroidPhoto
        caption="Summer 2022"
        turn="turnRight"
        size="middleImg"
        srcImg="testPhoto.jpeg"
      />
      <CardNavigation
        url="#"
        size="large"
        linkTitle="Camp program"
        linkDescription="From wake-up to sleep"
        linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
      />
      <PalaroidPhoto
        caption="Summer 2022"
        turn="turnRight"
        size="middleImg"
        srcImg="testPhoto.jpeg"
      />
      {/* Row 5 */} 
      <CardNavigation
        url="#"
        size="wide"
        linkTitle="Camp program"
        linkDescription="From wake-up to sleep"
        linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
      />
      <PalaroidPhoto
        caption="Summer 2022"
        turn="turnRight"
        size="middleImg"
        srcImg="testPhoto.jpeg"
      />
      <CardNavigation
        url="#"
        size="large"
        linkTitle="Camp program"
        linkDescription="From wake-up to sleep"
        linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
      />
    </div>

    <Registration
            registrationDate="21-29 грудня"
            registrationOpen="Реєстрація відкрита"
            registrationSeason="Зима 2023"
    />

    <Footer/>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
