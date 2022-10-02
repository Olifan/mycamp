import logo from './logo.svg';
import './App.css';
import PageTitle from './components/PageTitle/PageTitle';
import PalaroidPhoto from './components/PalaroidPhoto/PalaroidPhoto';
import Registration from './components/Registration/Registration';
import CardOfProgram from './components/CardOfProgram/CardOfProgram';
import CardNavigation from './components/CardNavigation/CardNavigation';
import CardTakeNotTake from './components/CardTakeNotTake/CardTakeNotTake';

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
      </div>
    </div>
  );
}

export default App;
