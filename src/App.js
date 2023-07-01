import Home from "../src/component/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import About from "./component/Home/About/About";
import Dashboard from "./component/Dashoboard/Dashboard/Dashboard";
import LoginModal from "./component/Login/LoginModal";
import NotFound from "./component/NotFound";
import SignFormModal from "./component/Login/SigInModel";
import Quizes from "./component/Quizes/Quizes";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/sign-in" element={<SignFormModal/>} />
        <Route path="/quizes" element={<Quizes/>} />
        <Route
          path="/dashboard/*"
          element={
              <Dashboard />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
