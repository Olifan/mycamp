import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import GalleryItem from './components/GalleryItem/GalleryItem';
import HomePage from './pages/HomePage/HomePage';
import OurTeam from './pages/OurTeam/OurTeam';
import MemberPage from './pages/MemberPage/MemberPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import CampProgramPage from './pages/CampProgramPage/CampProgramPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/our-team' element={<OurTeam/>}></Route>
          <Route exact path='/member-page/:memberId' element={<MemberPage/>}></Route>
          <Route exact path='/registration-page' element={<RegistrationPage/>}></Route>
          <Route exact path='/camp-program-page' element={<CampProgramPage/>}></Route>
        </Routes>
      </Router>
    </div>   
  );
}

export default App;
