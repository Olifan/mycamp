import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import ContentService from '../../services/ContentService';


const RegistrationForm = () => {

  const contentService = new ContentService();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shift, setShift] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    contentService.postRequest({name, email, phone, shift})  

    setName('');
    setEmail('');
    setPhone('');
    setShift('');
  };

  return(
    <div className={styles.registrationForm}>
     <img className={styles.icon} loading="lazy" alt='' src="https://assets.website-files.com/62e852b3b3432f63a22b8844/62eb8e9bdc4b4d07b438002f_streamlinehq-interface-file-clipboard-text-interface-essential-250-2.SVG"/>
     <h2>Registration Form</h2>
     <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div>
            <label for="name">Name</label>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} type="text" name='name' maxLength="256" data-name="Name" placeholder=''/>
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" name="email" maxLength="256" data-name="Email" placeholder=''/>
          </div>
          <div>
            <label for="email">Phone number</label>
            <input id="email" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.input} type="phone" name="phone" maxLength="256" data-name="Phone" placeholder=''/>
          </div>
          <div>
            <label for="email">Shift</label>
            <input id="email" value={shift} onChange={(e) => setShift(e.target.value)} className={styles.input} type="text" name="shift" maxLength="256" data-name="Shift" placeholder=''/>
          </div>
          <input className={styles.button} type="submit" value="Відправити запит"/>
        </form>
     </div>
  </div>
  )
  
};

RegistrationForm.propTypes = {};

RegistrationForm.defaultProps = {};

export default RegistrationForm;
