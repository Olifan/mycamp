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
    <CardNavigation/>
    <PalaroidPhoto/>
    <CardNavigation/>
    <PalaroidPhoto/>
    <CardNavigation/>
    <PalaroidPhoto/>
    <CardNavigation/>
    <PalaroidPhoto/>
    <CardNavigation/>
    <PalaroidPhoto/>
    <CardNavigation/>
    <PalaroidPhoto/>
    <CardNavigation/>
    <Registration/>
    <Footer/>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
