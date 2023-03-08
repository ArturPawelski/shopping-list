import React from 'react'


const Navbar = () => {
    return (
        <div className='w-full '>
            <nav className='flex bg-slate-400 justify-between pt-4 px-8 '>


                <a href="/"> Site Name</a>

                <ul className='flex gap-4'>
                    <li> <a href=""> LISTA </a></li>
                    <li> <a href=""> POSILKI  </a></li>
                    <li> <a href=""> TWOJE LISTY  </a></li>
                    <li> <a href=""> LOG IN  </a></li>



                </ul>


            </nav>
        </div>
    )
}

export default Navbar