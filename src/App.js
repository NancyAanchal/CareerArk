import Home from './Home';
import LoginPage from './assets/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './assets/Form';
import Chatbot from './assets/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;