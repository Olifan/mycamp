import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./HomePage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import PalaroidPhoto from "../../components/PalaroidPhoto/PalaroidPhoto";
import Registration from "../../components/Registration/Registration";
import CardNavigation from "../../components/CardNavigation/CardNavigation";
import Footer from "../../components/Footer/Footer";
import ContentService from "../../services/ContentService";
import { Link } from "react-router-dom";

const HomePage = () => {
  const contentService = new ContentService();

  const [data, setData] = useState(null);

  useEffect(() => {
    contentService.getHomePage().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.header}>
        <PageTitle
          title="mycamp."
          description="Дитячий табір в Карпатах та Європі"
        />
        <div className={`${styles.blockAbsolute} ${styles.photoLeft}`}>
          {data && (
            <PalaroidPhoto
              caption={data.data.attributes.polaroidPhotoHeaderLeft.title}
              turn="turnLeft"
              size="middleImg"
              srcImg={
                data.data.attributes.polaroidPhotoHeaderLeft.photo.data
                  .attributes.url
              }
            />
          )}
        </div>
        <div className={`${styles.blockAbsolute} ${styles.photoRight}`}>
          <PalaroidPhoto
            caption="Summer 2022"
            turn="turnRight"
            size="middleImg"
            srcImg="testPhoto.jpeg"
          />
        </div>
      </div>

        <Registration
          registrationDate="21-29 грудня"
          registrationOpen="Реєстрація відкрита"
          registrationSeason="Зима 2023"
        />
      

      <div className={styles.main}>
        {/* Row 1 */}
        <Link to = "/camp-program">
          <CardNavigation
            size="wide"
            linkTitle="Програма табору"
            linkDescription="З ранку до ночі"
            linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
          />
        </Link>
        
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnRight"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />

        <Link to = "/about">
          <CardNavigation
            className={styles.iconRight}
            linkTitle="Про табір"
            linkDescription="Наша місія"
            iconLocation="iconRight"
            linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f1219bd3c443f28ba3f7_streamlinehq-interface-lighting-light-bulb-on-interface-essential-250-3.SVG"
          />
        </Link>
        
        {/* Row 2 */}
        
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnRight"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />

        <Link to = "/things">
          <CardNavigation
            size="large"
            linkTitle="Що брати з собою?"
            linkDescription="і що не брати"
            linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8fb91f9a283de58e0318d_streamlinehq-travel-airport-baggage-maps-travel-250-2.SVG"
          />
        </Link>
        
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnRight"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />

        {/* Row 3 */}
        <CardNavigation
          linkTitle="Розташування"
          linkDescription="In the middle of..."
          iconLocation="iconLeft"
          linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e90516682d7c1ce06ca27b_streamlinehq-travel-map-maps-travel-250-3.SVG"
        />
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnRight"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />
        <Link to = "/our-team">
          <CardNavigation
            size="circle"
            linkTitle="Команда"
            linkDescription="Сім'я"
            linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8fa9930bdfe5c8b4ef6ad_streamlinehq-interface-user-multiple-interface-essential-250.SVG"
          />
        </Link>
        
        {/* Row 4 */}
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnRight"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />
        <CardNavigation
          size="large"
          linkTitle="Фото"
          linkDescription="Цікаві моменти"
          linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f4544af443508a817eac_streamlinehq-image-camera-1-images-photography-250.SVG"
        />
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnRight"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />
        {/* Row 5 */}
        <CardNavigation
          size="wide"
          linkTitle="Контакти"
          linkDescription="Майже цілодобово"
          linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e9862e0dcf927adce2de5c_streamlinehq-phone-telephone-ringing-phone-250.SVG"
        />
        <PalaroidPhoto
          caption="Summer 2022"
          turn="turnRight"
          size="middleImg"
          srcImg="testPhoto.jpeg"
        />
        <CardNavigation
          linkTitle="Партнерам"
          linkDescription="Допомога і підтримка"
          iconLocation="iconRight"
          linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f3a6fcf13cc3390a727e_streamlinehq-shopping-cloth-accessories-tall-hat-money-shopping-250.SVG"
        />
      </div>

      <Registration
        registrationDate="21-29 грудня"
        registrationOpen="Реєстрація відкрита"
        registrationSeason="Зима 2023"
      />

      <Footer />
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
