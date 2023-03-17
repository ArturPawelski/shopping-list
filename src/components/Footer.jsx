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


            <footer className='w-[90%] mx-auto py-12 md:flex md:items-center md:justify-center md:gap-[5%] xl:gap-[10%]'>

                <div className='w-full md:w-auto'>
                    <img src={Logo} alt="/" className='w-[65%] md:w-full mx-auto' />
                </div>

                <ul className='grid place-items-center mt-8 md:place-items-start md:items-center md:mt-0'>
                    <li className='flex items-center gap-2 lg:text-2xl'><HiOutlineMail size={30} /> sklep.lista@gmail.com</li>
                    <li className='flex items-center mt-4 gap-2 lg:text-2xl'> <MdOutlinePhoneIphone size={30} /> 666 666 666 </li>
                </ul>

                <div className='flex justify-center items-center gap-[15%] mt-12 md:mt-0'>
                    <AiFillFacebook size={40} className='lg:w-[3rem] xl:w-[4rem]' />
                    <BsInstagram size={40} className='lg:w-[3rem] xl:w-[4rem]' />
                    <SiTiktok size={40} className='lg:w-[3rem] xl:w-[4rem]' />
                    <VscTwitter size={40} className='lg:w-[3rem] xl:w-[4rem]' />
                </div>
                asdasd
            </footer>


        </div>
    )
}

export default Footer