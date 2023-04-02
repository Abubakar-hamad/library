import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import Departments from './pages/Departments';
import Footer from './components/Footer';
AOS.init();

function App() {

  return (

    <>
    <Router>
    <div className='' >
      <Header />
      <Routes>
      <Route  path='/' element={<Home  />} />
      <Route  path='/departments' element={<Departments />} />
        
      </Routes>
      <Footer />
    </div>
    </Router>
    </>
  );
}

export default App;
