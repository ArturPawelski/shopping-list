import { BrowserRouter } from 'react-router-dom'


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
