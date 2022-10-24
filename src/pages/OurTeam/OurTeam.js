import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './OurTeam.module.css';
import ContentService from '../../services/ContentService';
import TeamMember from '../../components/TeamMember/TeamMember';

const OurTeam = () => {
  const contentService = new ContentService();

  const [data, setData] = useState(null);

  useEffect( () => {
    contentService.getOurTeam().then( (response) => {
      setData(response);
    });
  }, [] );

   console.log(data)

  return(
    <div className={styles.ourTeam}>
        {data && data.data.attributes.team_members.data.map((teamMember) => 
          <TeamMember
            memberPhoto={teamMember.attributes.photo.data.attributes.url}
            memberName={teamMember.attributes.name}
            memberTitle={teamMember.attributes.title}
            stickerTapeSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62fcbcc5bc7fe93e7ca976b6_st-3.png"
          />
        )}
    </div>
  );
};

OurTeam.propTypes = {};

OurTeam.defaultProps = {};

export default OurTeam;
