import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MemberPage.module.css';
import OurTeam from '../OurTeam/OurTeam';
import ContentService from '../../services/ContentService';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import Footer from '../../components/Footer/Footer';


const MemberPage = () => {
  const contentService = new ContentService();

  const [data, setData] = useState(null);

  useEffect( () => {
    contentService.getOurTeam().then( (response) => {
      setData(response);
    });
  }, [] );

  const {memberId} = useParams();
  const member = data && data.data.attributes.team_members.data.find(dude => dude.id === +memberId);


  return(
    <div className={styles.memberPage}>
      {data && (
        <>
          <div className={styles.header}>
            <PageTitle
              title={member.attributes.name}
              description={member.attributes.title}
            />
          </div>
          <div className={styles.memberDetail}>
            <div className={styles.memberPhotoContainer}>
              <img className={styles.memberPhoto} src={member.attributes.photo?.data?.attributes.url} />
            </div>
            <div className={styles.memberDescription}>
              <p>{member.attributes.description}</p>
            </div>
          </div>
          <Footer/>
        </>
      )}
  </div>
  );
  
};

MemberPage.propTypes = {};

MemberPage.defaultProps = {};

export default MemberPage;
