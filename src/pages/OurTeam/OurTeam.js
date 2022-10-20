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

  return(
    <div className={styles.ourTeam}>
      <div>
        {data && (
          <TeamMember
            memberPhoto={data.data.attributes.teamMember.photo.data.attributes.url}
            memberName={data.data.attributes.teamMember.name}
            memberTitle={data.data.attributes.teamMember.title}
            stickerTapeSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62fcbcc5bc7fe93e7ca976b6_st-3.png"
          />
        )}
      </div>

      <div>
        {data && (
          <TeamMember
            memberPhoto={data.data.attributes.teamMember2.photo.data.attributes.url}
            memberName={data.data.attributes.teamMember2.name}
            memberTitle={data.data.attributes.teamMember2.title}
            stickerTapeSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62fcbcc5bc7fe93e7ca976b6_st-3.png"
          />
        )}
      </div>
    </div>
    
  );
};

OurTeam.propTypes = {};

OurTeam.defaultProps = {};

export default OurTeam;
