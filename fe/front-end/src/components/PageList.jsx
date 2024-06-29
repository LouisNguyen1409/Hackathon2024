import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import Recomendation from './Recomendation';
import ChatBox from './ChatBox';

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recomendation' element={<Recomendation />} />
        <Route path='/chatbox' element={<ChatBox />} />
      </Routes>
      <br />
      <br />
      <hr />
    </>
  );
};

export default PageList;
