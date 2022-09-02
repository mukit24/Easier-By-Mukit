import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import TutorialManager from './pages/TutorialManager';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/tutorial-manager' element={<TutorialManager />} />
      </Routes>
    </div>
  );
}

export default App;
