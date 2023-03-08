import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {
    return (
        <div className='w-full '>
            <nav className='flex bg-black text-white justify-between py-4 px-8 '>

                <Link to="/"> Sklep-lista </Link>

                <ul className='flex gap-4'>

                    <li> <Link to="/lista"> Lista </Link></li>
                    <li> <Link to="/posilki"> Posilki </Link> </li>
                    <li> <Link to="/twojelisty"> Twoje Listy </Link>  </li>
                    <li> <Link to="/login"> Log In </Link> </li>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar