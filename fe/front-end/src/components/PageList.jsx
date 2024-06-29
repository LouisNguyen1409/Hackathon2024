/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import Login from './LoginPage/Login';
import Register from './RegisterPage/Register';
import Recomendation from './Recomendation';
import ChatBox from './ChatBox';
import Setup from './RegisterProgress/Setup';
import SetGoal from './RegisterProgress/SetGoal';
import SetAge from './RegisterProgress/SetAge';
import SetupHeight from './RegisterProgress/SetupHeight';
import SetupGender from './RegisterProgress/SetupGender';
import DashBoard from './DashBoard';
import SetupWeight from './RegisterProgress/SetupWeight';
import SetupDone from './RegisterProgress/SetupDone';

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/recomendation' element={<Recomendation />} />
        <Route path='/chatbox' element={<ChatBox />} />
        <Route path='/setup/0' element={<Setup />} />
        <Route path='/setup/1' element={<SetGoal />} />
        <Route path='/setup/2' element={<SetAge />} />
        <Route path='/setup/3' element={<SetupHeight />} />
        <Route path='/setup/4' element={<SetupGender />} />
        <Route path='/setup/5' element={<SetupWeight />} />
        <Route path='/setup/6' element={<SetupDone />} />
      </Routes>
    </>
  );
};

export default PageList;
