import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import Blog from './pages/Blog';
import Contatti from './pages/Contatti';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/chi-sono' element={<ChiSono />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contatti' element={<Contatti />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
