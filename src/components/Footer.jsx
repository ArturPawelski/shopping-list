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
        <div className='w-full font-lol bg-[#FFFFFF] bg-opacity-[85%]'>
            <img src={Logo} alt="" />
            <HiOutlineMail />
            <MdOutlinePhoneIphone />
            <AiFillFacebook />
            <BsInstagram />
            <SiTiktok />
            <VscTwitter />
            footer
        </div>
    )
}

export default Footer