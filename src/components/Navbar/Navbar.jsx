import React from 'react'
import Container from '../Container/Container'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className='bg-[rgba(255,255,255,0.6)]'>
        <Container>
            <div className='flex justify-between items-center py-4'>
                <div className='w-1/2'>
                    <a href="#">
                        <img src="../../src/assets/logo.png" alt="" />
                    </a>
                </div>
                <div>
                    <ul className='flex gap-x-[25px] font-primary font-bold text-[#817382]'>
                        <li>
                            <a className='hover:text-primary duration-500' href="#">Home</a>
                        </li>
                        <li>
                            <a className='hover:text-primary duration-500' href="#">Our services</a>
                        </li>
                        <li>
                            <a className='hover:text-primary duration-500' href="#">About Us</a>
                        </li>
                        <li>
                            <a className='hover:text-primary duration-500' href="#">What's new?</a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-x-[9px]'>
                    <div className='bg-[#FFEDC9] p-[14px] rounded-md'>
                        <CiSearch className='text-[#FFAF0F] text-[22px]'></CiSearch>
                    </div>
                    <div className='bg-[#FFE4D9] rounded-[5px]'>
                        <button className='py-3 px-5 text-xl font-primary text-primary font-bold'>Contact us</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar