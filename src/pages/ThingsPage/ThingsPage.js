import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ThingsPage.module.css';
import ContentService from '../../services/ContentService';
import CardTakeNotTake from '../../components/CardTakeNotTake/CardTakeNotTake';

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
      <div className={styles.thingsPageContent}>
        <div className={styles.thingToTake}>
          {thingToTake}
        </div>
        <div className={styles.thingNotTake}>
          {thingNotTake}
        </div>
      </div>
      
    </div>
  )
};

ThingsPage.propTypes = {};

ThingsPage.defaultProps = {};

export default ThingsPage;
