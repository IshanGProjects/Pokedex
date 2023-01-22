import Navbar from './Navbar';
import Home from './Home';
import Pokemon from './pokemon';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router> 
    <div className="App">
        <Navbar />
        <div className='content'>
            {/* <Home /> */}
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/pokemon' element={<Pokemon />} />
            </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
