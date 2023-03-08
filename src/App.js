import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Lista from './components/Lista';
import Posilki from './components/Posilki';
import TwojeListy from './components/TwojeListy';
import Login from './components/Login';



function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/lista' element={<Lista />} />

          <Route path='/posilki' element={< Posilki />} />

          <Route path='/twojelisty' element={<TwojeListy />} />

          <Route path='/login' element={<Login />} />

          <Route path='*' element={<h1>404 error</h1>} />



        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
