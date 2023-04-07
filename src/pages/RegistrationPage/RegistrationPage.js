import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import PropTypes from 'prop-types';
import styles from './RegistrationPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ContentService from '../../services/ContentService';
import Tabs from '../../components/Tabs/Tabs';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const RegistrationPage = () => {

  const contentService = new ContentService();

  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeShift, setActiveShift] = useState(null);
  const [activeShiftTab, setActiveShiftTab] = useState(0);
  const [activeShiftTitle, setActiveShiftTitle] = useState(null);
  const [activeShiftId, setActiveShiftId] = useState(null);
  

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveShift(index);
    setActiveShiftTitle(data.data.attributes.shifts.data[index].attributes.title);
    setActiveShiftId(data.data.attributes.shifts.data[index].id)
  };

  const handleShiftTabClick = (index) => {
    setActiveShiftTab(index);
  }

  useEffect( () => {
    contentService.getShift().then((response) => {
      setData(response);
      setActiveShift(0);
      setActiveShiftTab(0);
      setActiveShiftTitle(response?.data?.attributes?.shifts?.data[0]?.attributes?.title || null);
      setActiveShiftId(response?.data?.attributes?.shifts?.data[0]?.id || null)
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
          <div className={`${styles.tabs} ${styles.shiftTab}`}>
            {data.data.attributes.shifts.data[activeShift].attributes.shiftTab.map ((dataShift, index) => (                         
              <Tabs
                key={dataShift.id}
                tabData={dataShift.title}
                isActive={index === activeShiftTab}
                onClick={() => handleShiftTabClick(index)}
              />           
            ))}
          </div>        
          <ReactMarkdown className={styles.markdown}
            rehypePlugins={[rehypeRaw]}
            children={data.data.attributes.shifts.data[activeShift].attributes.shiftTab[activeShiftTab]?.content}
          />       
        </div>
      </div>
    </>
  );

  return(
    <div>
      {
        data && (
          <>
            <PageTitle
              title={data?.data.attributes.pageTitle.title}
              description={data?.data.attributes.pageTitle.subtitle}
            />
            <div className={styles.tabs}>
              {tab}
            </div>
            {shift}           
            <RegistrationForm activeShiftTitle={activeShiftTitle} activeShiftId={activeShiftId}/> 
            <Navigation/>
            <Footer/>           
          </>
        )
      } 
  </div>
  );
};

RegistrationPage.propTypes = {};

RegistrationPage.defaultProps = {};

export default RegistrationPage;
