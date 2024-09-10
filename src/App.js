import React from "react";
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./assets/Form";
import Chatbot from "./pages/Chatbot";
import JobAlert from "./pages/JobAlert";
import ComingSoon from "./assets/comingsoon";
import LoginPage from "./pages/Login";
import TopHeader from "./pages/TopHeader";
import BottomHeader from "./pages/BottomHeader";
import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import TopArticles from "./pages/TopArticles";
import Counsellor from "./pages/Counsellor";
import Footer from "./pages/Footer";


function App() {
    return (
      <Router>
        <div className="App">
          <TopHeader />
          <BottomHeader />
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <Features />
                <TopArticles />
                <Counsellor />
              </>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/jobs" element={<JobAlert />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/Form" element={<Form />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//         <Route path="/jobs" element={<JobAlert />} />
//         <Route path="/comingsoon" element={<ComingSoon />} />
//       </Routes>
//     </Router>
//   );
// }

export default App;
