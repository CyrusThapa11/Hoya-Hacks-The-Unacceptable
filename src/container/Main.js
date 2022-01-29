import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/HomePage/Header/Header';
import Home from '../pages/Home';
import Chat from '../pages/ChatroomPage';

function Main() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
