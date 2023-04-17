import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Gallery from './components/gallery/Gallery';
import ProfilePageNav from './components/profilePageNav/ProfilePageNav';
import ProfilePage from './components/profilePage/ProfilePage';
import Form from './components/form/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/secondPage' element={<SecondPage />} />
      </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Profile />
      <Gallery /> */}
      {/* <ProfilePageNav />
      <ProfilePage />
      <Form /> */}
    </div>
  );
}

export default App;
