import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

const Navigation = ({icon, url, title}) => (
  
    <a className={styles.navLink} href={url}>
      <img className={styles.icon} src={icon}/>
      <div>
        {title}
      </div>
    </a>

);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
