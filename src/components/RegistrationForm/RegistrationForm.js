import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/bootstrap.css'
import styles from './RegistrationForm.module.css';
import ContentService from '../../services/ContentService';
import { useForm } from 'react-hook-form';


const RegistrationForm = () => {

  const contentService = new ContentService();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shift, setShift] = useState('');
  const [shifts, setShifts] = useState('');

  const {register, handleSubmit, formState: { errors }} = useForm();

  useEffect( () => {
    contentService.getShift().then((response) => {
      setShifts(response);
    });
  }, [] );



  const onSubmit = async(e) => {
    // e.preventDefault();
    
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label for="name">Name</label>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} type="text" name='name' maxLength="256" data-name="Name" placeholder=''/>
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" {...register("email", {required: true, pattern: {value: /^\S+@\S+\.\S+$/, message: "Invalid"}})} value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} type="text" name="email" maxLength="256" data-name="Email" placeholder=''/>
            {errors.email && <p>Invalid</p>}
          </div>
          <div>
            <label for="phone">Phone number</label>
            <PhoneInput country={'ua'} inputClass = {styles.input} specialLabel='' 
            id="phone" value={phone} onChange={(value, country, e, formattedValue) => setPhone(formattedValue)} 
            masks = {{ua: '(...) ...-..-..'}} preferredCountries = {['ua']} disableCountryCode = {true} 
            type="phone" name="phone" maxLength="256" data-name="Phone" placeholder=''/>
          </div>
          <div>
            <label for="shift">Shift</label>
            <select id="shift" value={shift}
            onChange={(e) => setShift(e.target.value)} 
            className={styles.input} type="text" name="shift" maxLength="256" data-name="Shift" placeholder=''>
              <option hidden></option>
              {
                shifts && shifts.data.attributes.shifts.data.map((dataShift) => (
                  <option value={dataShift.id}>{dataShift.attributes.title}</option>
                ))
              }
            </select>
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
