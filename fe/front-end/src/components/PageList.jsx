import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Recomendation from "./Recomendation";
import ChatBox from "./ChatBox";
import Setup from "./Setup";
import SetGoal from "./SetGoal";
import SetupHeight from "./SetupHeight";

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recomendation" element={<Recomendation />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/setup/1" element={<SetGoal />} />
        <Route path="/setup/height" element={<SetupHeight />} />
      </Routes>
    </>
  );
};

export default PageList;
