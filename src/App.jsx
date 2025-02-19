import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
