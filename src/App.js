import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home/Home';
import Lista from './components/Lista/Lista';
import Posilki from './components/Posilki/Posilki';
import TwojeListy from './components/TwojeListy/TwojeListy';
import Login from './components/Login/Login';

import Navbar from './components/Navbar';



function App() {
  return (
    <div className='bg-gradient-to-b from-blue-300 to-blue-800 min-h-[1049px]' >

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          < Route path='/lista' element={< Lista />} />

          < Route path='/posilki' element={< Posilki />} />

          < Route path='/twojelisty' element={< TwojeListy />} />

          < Route path='/login' element={< Login />} />

          < Route path='*' element={<h1 h1 > 404 error</h1 >} />
        </Routes >
      </BrowserRouter >





    </div >
  );
}

export default App;
