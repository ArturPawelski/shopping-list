import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home/Home';
import Lista from './components/Lista/Lista';
import Posilki from './components/Posilki/Posilki';
import TwojeListy from './components/TwojeListy/TwojeListy';
import Login from './components/Login/Login';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';



function App() {
  return (
    <div className='bg-gradient-to-b from-blue-300 to-blue-800'>

      <BrowserRouter>

        <Navbar />

        <AnimatedRoutes />
        <Footer />

      </BrowserRouter >


    </div >
  );
}

export default App;
