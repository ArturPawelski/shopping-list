import React from 'react'
import Logo from '../images/SKLEP-LISTA-footer.png'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { SiTiktok } from 'react-icons/si'
import { VscTwitter } from 'react-icons/vsc'

const Footer = () => {


    return (
        <div className='w-full font-lol font-bold bg-[#FFFFFF] bg-opacity-[85%] mt-[8rem]   '>


            <footer className='w-[90%] mx-auto py-12'>

                <div className='w-full'>
                    <img src={Logo} alt="/" className='w-[65%] mx-auto' />
                </div>

                <ul className='grid place-items-center mt-8'>
                    <li className='flex items-center gap-2'><HiOutlineMail size={25} /> sklep.lista@gmail.com</li>
                    <li className='flex items-center mt-4 gap-2'> <MdOutlinePhoneIphone size={25} /> 666 666 666 </li>
                </ul>

                <div className='flex justify-center items-center gap-[15%] mt-8'>
                    <AiFillFacebook size={25} />
                    <BsInstagram size={25} />
                    <SiTiktok size={25} />
                    <VscTwitter size={25} />
                </div>

            </footer>


        </div>
    )
}

export default Footer