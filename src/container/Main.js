import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/HomePage/Header/Header';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import WaterCycle from '../pages/WaterCycle';
import Chat from '../pages/ChatroomPage';
import Profile from '../pages/Profile';

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/waterCycle" element={<WaterCycle />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
