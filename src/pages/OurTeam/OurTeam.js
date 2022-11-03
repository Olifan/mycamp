import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './OurTeam.module.css';
import ContentService from '../../services/ContentService';
import TeamMember from '../../components/TeamMember/TeamMember';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  const contentService = new ContentService();

  const [data, setData] = useState(null);

  useEffect( () => {
    contentService.getOurTeam().then((response) => {
      setData(response);
    });
  }, [] );

  const members = data && data.data.attributes.team_members.data.map(member => {
    return(
      <div className={styles.ourTeam}>
        <Link to={`/memberPage/${member.id}`}>
          <TeamMember 
            key={member.id}
            memberPhoto={member.attributes.photo?.data?.attributes.url}
            memberName={member.attributes.name}
            memberTitle={member.attributes.title}
            stickerTapeSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62fcbcc5bc7fe93e7ca976b6_st-3.png"
            />
        </Link>
        
      </div>
    )
  })


  return(
    <div className={styles.ourTeam}>
      <>
      {members}
      </>
       
    </div>
  );
};

OurTeam.propTypes = {};

OurTeam.defaultProps = {};

export default OurTeam;
