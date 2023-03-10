import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/SKLEP-nav.png'
import { FiMenu } from 'react-icons/fi'



const Navbar = () => {

    const [menu, setMenu] = useState(true)

    const toggleMenu = () => {

    }


    return (
        <div className='w-full font-lol font-bold'>
            <nav className='flex text-white bg-[#000B70] justify-between py-8 px-4 uppercase items-center gap-4 sm:px-8'>



                <Link to="/"> <img src={Logo} alt="" className='w-[12rem] md:w-[16rem] lg:w-[20rem]' /> </Link>

                <ul className='hidden  lg:flex lg:gap-12 lg:text-[1.2rem] lg:items-center '>

                    <li> <Link to="/lista"> Lista </Link></li>
                    <li> <Link to="/posilki"> Posilki </Link> </li>
                    <li> <Link to="/twojelisty"> Twoje Listy </Link>  </li>
                    <li className='bg-[#262A83] py-2 px-8 rounded-xl'> <Link to="/login"> Log In </Link> </li>

                </ul>

                <FiMenu size={25} className='lg:hidden' />






            </nav>
        </div>
    )
}

export default Navbar