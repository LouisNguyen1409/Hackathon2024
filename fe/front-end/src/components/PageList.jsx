import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Recomendation from "./Recomendation";
import ChatBox from "./ChatBox";
import Setup from "./Setup";

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
      </Routes>
    </>
  );
};

export default PageList;
