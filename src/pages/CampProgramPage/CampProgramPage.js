import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './CampProgramPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import Registration from '../../components/Registration/Registration';
import Footer from '../../components/Footer/Footer';
import ContentService from '../../services/ContentService';
import CardOfProgram from '../../components/CardOfProgram/CardOfProgram';

const CampProgramPage = () => {
  const contentService = new ContentService();

  const [data, setData] = useState(null);

  useEffect( () => {
    contentService.getProgram().then((response) => {
      setData(response);
    });
  }, [] );

  const programs = data && data.data.map(program => {
    return(
      <CardOfProgram 
        key={program.id}
        programTime ={program.attributes.programTime}
        programTitle = {program.attributes.programTitle}
        programDescription = {program.attributes.programDescription}
      />
    )
  }

  )

  return(
    <>
      <div className={styles.header}>
        <PageTitle
          title="Camp Program"
          description="Today. Tomorrow. Allways."
        />
      </div>
      <div className={styles.schedule}>
        {programs}
      </div>
      <Registration
        registrationDate="21-29 грудня"
        registrationOpen="Реєстрація відкрита"
        registrationSeason="Зима 2023"
      />
      <Footer/>
    </>
  )
};

CampProgramPage.propTypes = {};

CampProgramPage.defaultProps = {};

export default CampProgramPage;
