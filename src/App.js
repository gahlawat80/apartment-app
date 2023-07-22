import './App.css';
import Header from './components/Header';
import Apartments from './pages/Apartments';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Features from './pages/Features';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/find-apartment' element={<Apartments />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
