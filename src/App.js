import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Chatbot from "./pages/Chatbot";
import JobAlert from "./pages/JobAlert";
import ComingSoon from "./pages/comingsoon";
import LoginPage from "./pages/Login";
import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";
import HomePage from "./components/HomePage";
import Features from "./components/Features";
import TopArticles from "./components/TopArticles";
import Counsellor from "./components/Counsellor";
import QuizPage from "./components/QuizPage";
import Footer from "./components/Footer";
import CounsellingPage1 from './components/CounsellingPage1';

function App() {
  return (
    <Router>
      <div className="App">
        <TopHeader />
        <BottomHeader />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <Features />
                <TopArticles />
                <Counsellor />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/jobs" element={<JobAlert />} />
          <Route path="/QuizPage" element={<QuizPage />} />
          <Route path="/counselling1" element={<CounsellingPage1 />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
