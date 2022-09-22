import logo from './logo.svg';
import './App.css';
import PageTitle from './components/PageTitle/PageTitle';
import PalaroidPhoto from './components/PalaroidPhoto/PalaroidPhoto';

function App() {
  return (
    <div className="App">
      <div>
        <PageTitle/>
      </div>
      <div>
        <PalaroidPhoto/>
      </div>
    </div>
  );
}

export default App;
