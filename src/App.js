import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import OurTeam from './pages/OurTeam/OurTeam';
import MemberPage from './pages/MemberPage/MemberPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import CampProgramPage from './pages/CampProgramPage/CampProgramPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ThingsPage from './pages/ThingsPage/ThingsPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PhotoPage from './pages/PhotoPage/PhotoPage';
import LocationPage from './pages/LocationPage/LocationPage';
import ParentsPage from './pages/ParentsPage/ParentsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/our-team' element={<OurTeam/>}></Route>
          <Route exact path='/member-page/:memberId' element={<MemberPage/>}></Route>
          <Route exact path='/registration' element={<RegistrationPage/>}></Route>
          <Route exact path='/camp-program' element={<CampProgramPage/>}></Route>
          <Route exact path='/about' element={<AboutPage/>}></Route>
          <Route exact path='/things' element={<ThingsPage/>}></Route>
          <Route exact path='/contacts' element={<ContactsPage/>}></Route>
          <Route exact path='/photo' element={<PhotoPage/>}></Route>
          <Route exact path='/location' element={<LocationPage/>}></Route>
          <Route exact path='/for-parents' element={<ParentsPage/>}></Route>
        </Routes>
      </Router>
    </div>   
  );
}

export default App;
