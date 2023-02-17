import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RegistrationPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ContentService from '../../services/ContentService';
import { useParams } from 'react-router-dom';
import CardWithText from '../../components/CardWithText/CardWithText';
import Tabs from '../../components/Tabs/Tabs';

const RegistrationPage = () => {

  const contentService = new ContentService();

  const [data, setData] = useState(null);

  useEffect( () => {
    contentService.getShift().then((response) => {
      setData(response);
    });
  }, [] );

  const {shiftId} = useParams();
  const shift = data && data.data.attributes.shifts.data.map(dataShift => {
    console.log(dataShift);
    return (
      <>
        <div className={styles.shiftDetail}>
            <div className={styles.shiftPhotoContainer}>
              <img className={styles.shiftCover} src={dataShift.attributes.mainImage?.data?.attributes.url} />
            </div>
            <div className={styles.shiftDescription}>
              <h3>{dataShift.attributes.startDate} - {dataShift.attributes.endDate}</h3>
              <h2>{dataShift.attributes.title}</h2>
              <p>{dataShift.attributes.description}</p>
            </div>
          </div>
      </>
    )
  });

  const tab = data && data.data.attributes.shifts.data.map( dataShift => {
    return(
      <Tabs
        key={dataShift.id}
        tabData={dataShift.attributes.title}
      />
    )
  })
  
  return(
    <div className={styles.registrationPage}>
      {
        data && (
          <>
            <PageTitle
              title="Registration"
              description="Today. Tomorrow. Allways."
            />
            <div className={styles.tabs}>
              {tab}
            </div>
            {shift}
            <RegistrationForm/>
          </>
        )
      } 
  </div>
  );
};

RegistrationPage.propTypes = {};

RegistrationPage.defaultProps = {};

export default RegistrationPage;
