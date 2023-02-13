import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import mycampLogo from '../../images/mycampLogo.jpg';

const Modal = ({content, show, close}) => {

  return(
    <>     
      <div className={styles.modal} style={{ display: show ? 'block' : 'none'}}>
      <div className={styles.overlay} onClick={close}></div>
        <div className={styles.modalContent}>
          {content}
          <button className={styles.closeModalButton} onClick={close}>
            <img className={styles.logo} src={mycampLogo}/>
            </button>
        </div>
      </div>
    </>
    )
  
};

Modal.propTypes = {
  content: PropTypes.element,
  show: PropTypes.bool,
  close: PropTypes.func,
};

Modal.defaultProps = {
  show: false,
  close: () => (false),
  content: <div>Empty modal</div>
};

export default Modal;
