import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RegistrationPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ContentService from '../../services/ContentService';
import { useParams } from 'react-router-dom';
import CardWithText from '../../components/CardWithText/CardWithText';

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
    return (
      <CardWithText
        key={dataShift.id}
        text={dataShift.attributes.description}
        title={dataShift.attributes.title}
        />
    )
  });
  
  return(
    <div className={styles.registrationPage}>
      {
        data && (
          <>
            <PageTitle
              title="Registration"
              description="Today. Tomorrow. Allways."
            />
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
