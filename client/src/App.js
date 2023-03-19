import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <div>
      <Header />
      <Routes>
        
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
