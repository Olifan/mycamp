import logo from './logo.svg';
import './App.css';
import PageTitle from './components/PageTitle/PageTitle';
import PalaroidPhoto from './components/PalaroidPhoto/PalaroidPhoto';
import Registration from './components/Registration/Registration';
import CardOfProgram from './components/CardOfProgram/CardOfProgram';
import CardNavigation from './components/CardNavigation/CardNavigation';
import CardTakeNotTake from './components/CardTakeNotTake/CardTakeNotTake';
import TeamMember from './components/TeamMember/TeamMember';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import CardWithText from './components/CardWithText/CardWithText';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import GalleryPrew from './components/GalleryPrew/GalleryPrew';

function App() {
  return (
    <div className="App">
      <div>
        <PageTitle 
          title="mycamp."
          description="Дитячий табір в Карпатах та Європі"/>
      </div>
      <div>
        <PalaroidPhoto 
          caption="Summer 2022"
          turn="turnLeft"
          size="middleImg"
          srcImg="testPhoto.jpeg"/>
      </div>
      <div>
        <Registration
          registrationDate="21-29 грудня"
          registrationOpen="Реєстрація відкрита"
          registrationSeason="Зима 2023"/>
      </div>
      <div className="program">
        <div>
          <CardOfProgram 
            programTime="8:00" 
            programTitle="Підйом" 
            programDescription="Може бути і пізніше"/>
        </div>
      </div>
      <div>
        <CardNavigation
          url="#"
          size="wide"
          linkTitle="Camp program"
          linkDescription="From wake-up to sleep"
          linkIcon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
        />
      </div>
      <div>
        <CardTakeNotTake
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea72c9dbd70f79aba7f794_streamlinehq-interface-validation-check-circle-interface-essential-250.SVG"
          title="Towel"
        />
      </div>
      <div>
        <CardWithText
        icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ea61cb131e422cf017262d_streamlinehq-shopping-business-target-money-shopping-250.SVG"
        title="Що таке mycamp."
        text="Це найкраще місце для дитини в будь-якому її віці. Цей проект про мотивацію, силу духу, лідерство, про подолання комплексів. Цей проект створений на основі вічних цінностей, таких як милосердя, добро, любов, дружба - все те, що допомагає вижити всьому людству і кожній людині окремо.
              Атмосфера в mycamp особлива. Емоції насичено-яскраві. Спогади найтепліші і улюблені.
              mycamp - це набагато більше ніж просто дитячий табір. Це як одна велика сім'я. Де люблять, зрозуміють, навчать і завжди підтримають. Тут раніше незнайомі люди, стають кращими друзями.
              Нам є чим дивувати тебе, повір.
              Сьогодні. Завтра. Назавжди. "   
        />
      </div>
      <div className="navigation">
        <Navigation
          icon="https://assets.website-files.com/62e852b3b3432f63a22b8844/62ebb5e41c8d3583d5aae2c2_streamlinehq-interface-home-2-interface-essential-250.SVG"
          url="#"
          title="Home"
        />
      </div>
      <div className="section">
        <RegistrationForm/>
      </div>
      <div>
        <TeamMember
          memberPhoto="testPhoto.jpeg"
          memberName="Anton"
          memberTitle="Web Developer"
          stickerTapeSrc="https://assets.website-files.com/62e852b3b3432f63a22b8844/62fcbcc5bc7fe93e7ca976b6_st-3.png"
        />
      </div>
      <div>
        <Footer/>
      </div>
      <div>
        <GalleryPrew/>
      </div>
    </div>
  );
}

export default App;
