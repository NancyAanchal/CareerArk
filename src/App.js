import React from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./assets/Form";
import Chatbot from "./pages/Chatbot";
import JobAlert from "./pages/JobAlert";
import ComingSoon from "./assets/comingsoon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/jobs" element={<JobAlert />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
