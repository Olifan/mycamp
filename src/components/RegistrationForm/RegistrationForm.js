import React from 'react';
import PropTypes from 'prop-types';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => (
  <div className={styles.registrationForm}>
     <img className={styles.icon} loading="lazy" alt='' src="https://assets.website-files.com/62e852b3b3432f63a22b8844/62eb8e9bdc4b4d07b438002f_streamlinehq-interface-file-clipboard-text-interface-essential-250-2.SVG"/>
     <h2>Registration Form</h2>
     <div className={styles.form}>
        <form>
          <div>
            <label for="name">Name</label>
            <input id="name" className={styles.input} type="text" name='name' maxLength="256" data-name="Name" placeholder=''/>
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" className={styles.input} type="email" name="email" maxLength="256" data-name="Email" placeholder=''/>
          </div>
          <input className={styles.button} type="submit"/>
        </form>
     </div>
  </div>
);

RegistrationForm.propTypes = {};

RegistrationForm.defaultProps = {};

export default RegistrationForm;
