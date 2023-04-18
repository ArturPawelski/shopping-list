import React from 'react'

import Home from './Home/Home';
import Lista from './Lista/Lista';
import Posilki from './Posilki/Posilki';
import TwojeListy from './TwojeListy/TwojeListy';
import Login from './Login/Login';

import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>

                <Route path='/' element={<Home />} />
                < Route path='/lista' element={< Lista />} />
                < Route path='/posilki' element={< Posilki />} />
                < Route path='/twojelisty' element={< TwojeListy />} />
                < Route path='/login' element={< Login />} />
                < Route path='*' element={<h1 h1 > 404 error </h1 >} />

            </Routes >
        </AnimatePresence>
    )
}

export default AnimatedRoutes