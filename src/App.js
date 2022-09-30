import logo from './logo.svg';
import './App.css';
import PageTitle from './components/PageTitle/PageTitle';
import PalaroidPhoto from './components/PalaroidPhoto/PalaroidPhoto';
import Registration from './components/Registration/Registration';
import CardOfProgram from './components/CardOfProgram/CardOfProgram';

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
      <div className="Program">
        <div>
          <CardOfProgram 
            programTime="8:00" 
            programTitle="Підйом" 
            programDescription="Може бути і пізніше"/>
        </div>
      </div>
    </div>
  );
}

export default App;
