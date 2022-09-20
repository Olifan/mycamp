import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTitle.module.css';
import PalaroidPhoto from '../PalaroidPhoto/PalaroidPhoto';

const PageTitle = () => (
  <div className={styles.PageTitle}>
    <div>
      <PalaroidPhoto/>
    </div>
    
    <div>
      <img src='logo192.png'/>
    </div>
    <div>
      <h1>mycamp</h1>
      <h6>Дитячий табір в Карпатах та Європі</h6>
    </div>
    
    <div>
      <PalaroidPhoto/>
    </div>
    
  </div>
);

PageTitle.propTypes = {};

PageTitle.defaultProps = {};

export default PageTitle;
