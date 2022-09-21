import React from 'react';
import PropTypes from 'prop-types';
import styles from './PalaroidPhoto.module.css';

const PalaroidPhoto = () => (
  <div class="wraper">
    <div class="item">
      <div class="polaroid">
        <img src='logo192.png'/>
        <div class="caption">
          Summer 2022
        </div>
      </div>  
    </div> 
  </div>
);

PalaroidPhoto.propTypes = {};

PalaroidPhoto.defaultProps = {};

export default PalaroidPhoto;
