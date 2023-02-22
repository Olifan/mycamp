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
  const [activeTab, setActiveTab] = useState(0);
  const [activeShift, setActiveShift] = useState(null);
  const [activeShiftTab, setActiveShiftTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveShift(index);
   
  };

  const handleShiftTabClick = (index) => {
    setActiveShiftTab(index);
  }

  useEffect( () => {
    contentService.getShift().then((response) => {
      setData(response);
      setActiveShift(0);
      setActiveShiftTab(0);
    });
  }, [] );

  const tab = data && data.data.attributes.shifts.data.map( (dataShift, index) => {
    return(
      <Tabs
        key={dataShift.id}
        tabData={dataShift.attributes.title}
        isActive = {index === activeTab}
        onClick = {() => handleTabClick(index)}
      />
    )
  });

  const shift = data && activeShift !== null && data.data.attributes.shifts.data[activeShift] && (
    
    <>
      <div className={styles.shiftDetail}>
        <div className={styles.shiftPhotoContainer}>
          <img className={styles.shiftCover} src={data.data.attributes.shifts.data[activeShift].attributes.mainImage?.data?.attributes.url} />
        </div>
        <div className={styles.shiftDescription}>
          <div className={styles.tabs}>
          {data.data.attributes.shifts.data[activeShift].attributes.shiftTab.map ((dataShift, index) => (                         
            <Tabs
              key={dataShift.id}
              tabData={dataShift.title}
              isActive={index === activeShiftTab}
              onClick={() => handleShiftTabClick(index)}
            />           
          ))}
          </div>
          
          <p>{data.data.attributes.shifts.data[activeShift].attributes.shiftTab[activeShiftTab]?.content}</p>
          
        </div>
      </div>
    </>
  );

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
