import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import Registration from '../../components/Registration/Registration';
import Footer from '../../components/Footer/Footer';
import CardWithText from '../../components/CardWithText/CardWithText';

const ContactsPage = () => {
  return(
    <div className={styles.сontactsPage}>
      <div>
        <PageTitle
          title="Контакти"
          description="Today. Tomorrow. Allways."
        />
      </div>
      <div className={styles.contactsContent}>
      <CardWithText
          title="Питання"
          text="Текст риба"
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
        />
        <CardWithText
          title="Контакти"
          text="Текст риба"
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
        />
      </div>
      <Registration
        registrationDate="21-29 грудня"
        registrationOpen="Реєстрація відкрита"
        registrationSeason="Зима 2023"
      />
      <Footer/>
    </div>
  )
 
};

ContactsPage.propTypes = {};

ContactsPage.defaultProps = {};

export default ContactsPage;
