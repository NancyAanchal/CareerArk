import Home from './Home';
import LoginPage from './assets/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './assets/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;