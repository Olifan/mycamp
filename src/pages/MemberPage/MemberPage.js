import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MemberPage.module.css';
import OurTeam from '../OurTeam/OurTeam';
import ContentService from '../../services/ContentService';
import { useParams } from 'react-router-dom';


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
      {
        data && (
          <div>
            {member.attributes.name}
          </div>
        )
      }
  </div>
  );
  
};

MemberPage.propTypes = {};

MemberPage.defaultProps = {};

export default MemberPage;
