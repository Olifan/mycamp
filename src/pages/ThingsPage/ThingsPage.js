import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ThingsPage.module.css';
import ContentService from '../../services/ContentService';
import CardTakeNotTake from '../../components/CardTakeNotTake/CardTakeNotTake';
import PageTitle from '../../components/PageTitle/PageTitle';
import Registration from '../../components/Registration/Registration';
import Footer from '../../components/Footer/Footer';

const ThingsPage = () => {

  const contentService = new ContentService();

  const [data, setData] = useState(null);

  useEffect(() => {
    contentService.getThingsPage().then((response) => {
      setData(response);
    });
  }, []);

  const thingToTake = data && data.data.attributes.thing_to_takes.data.map(toTake => {
    return(
      <CardTakeNotTake
        key={toTake.id}
        title = {toTake.attributes.title}
        icon = {'https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea72c9dbd70f79aba7f794_streamlinehq-interface-validation-check-circle-interface-essential-250.SVG'}
      />
    )
  })

  const thingNotTake = data && data.data.attributes.thing_not_takes.data.map(notTake => {
    return(
      <CardTakeNotTake
        key={notTake.id}
        title={notTake.attributes.title}
        icon = {'https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea72c9b102af9865e1a358_streamlinehq-interface-delete-square-interface-essential-250.SVG'}
      />
    )
  })

  return(
    <div className={styles.thingsPage}>
      <PageTitle
        title={'Що брати?'}
        description="Today. Tomorrow. Allways."
      />
      <div className={styles.thingsPageContent}>
        <div className={styles.thingToTake}>
          <h2 className={styles.thingToTakeTitle}>Що треба взяти:</h2>
          {thingToTake}
        </div>
        <div className={`${styles.thingToTake} ${styles.thingNotTake}`}>
          <h2 className={styles.thingToTakeTitle}>Що брати не треба:</h2>
          {thingNotTake}
        </div>
      </div>
      <Registration
        registrationDate="21-29 грудня"
        registrationOpen="Реєстрація відкрита"
        registrationSeason="Зима 2023"
      />
      <Footer/> 
    </div>
  )
};

ThingsPage.propTypes = {};

ThingsPage.defaultProps = {};

export default ThingsPage;
