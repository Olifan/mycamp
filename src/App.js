import logo from './logo.svg';
import './App.css';
import PageTitle from './components/PageTitle/PageTitle';
import PalaroidPhoto from './components/PalaroidPhoto/PalaroidPhoto';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <div>
        <PageTitle/>
      </div>
      <div>
        <PalaroidPhoto/>
      </div>
      <div>
        <Registration/>
      </div>
    </div>
  );
}

export default App;
