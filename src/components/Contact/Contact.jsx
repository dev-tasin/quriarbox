import React from 'react'
import Container from '../Container/Container'
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 , CiMail  } from "react-icons/ci";
import { FaFacebookSquare , FaTwitterSquare  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";





const Contact = () => {
  return (
    <Container>
        <div className='pb-[183px]'>
            <div className='flex flex-col justify-center items-center'> 
                <h3 className='text-primary font-primary font-bold text-[31px] '>FIND US</h3>
                <h3 className='text-[#11111D] font-primary font-extrabold text-[39px]'>Access us easily</h3>
            </div>
            <div className='pt-[85px] flex justify-between'>
                <img src="../../src/assets/map.png" alt="" />
                <div className='pt-[81px] pl-[88px] pr-[126px] pb-[88px] bg-white'>
                    <h6 className='font-primary font-bold text-xl text-[#464558] pb-[37px]'>Contact with us</h6>
                    <div className='flex justify-center items-center gap-x-[13px]'>
                        <IoLocationOutline className='text-[#FFAF0F]'></IoLocationOutline>
                        <p className='text-[#5C5B6C] font-primary'>2277 Lorem Ave, San Diego, CA 22553</p>
                    </div>
                    <div className='flex justify-center items-center gap-x-[13px]'>
                        <CiClock2 className='text-[#FFAF0F]'></CiClock2>
                        <p className='text-[#5C5B6C] font-primary w-[285px] py-[15px]'>Monday - Friday: 10 am - 10pm
                        Sunday: 11 am - 9pm</p>
                    </div>
                    <div className='flex justify-center items-center gap-x-[13px]'>
                        <CiMail className='text-[#FFAF0F]'></CiMail>
                        <p className='text-[#5C5B6C] font-primary w-[285px]'>info@quriarbox.com</p>
                    </div>
                    <div className='flex gap-x-[24px] pt-[50px]'>
                        <FaFacebookSquare className='text-[#EBEBF5] text-[22px] hover:text-primary duration-500'></FaFacebookSquare>
                        <AiFillInstagram className='text-[#EBEBF5] text-[22px] hover:text-primary duration-500'></AiFillInstagram>
                        <FaTwitterSquare  className='text-[#EBEBF5] text-[22px] hover:text-primary duration-500'></FaTwitterSquare >
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <button className='flex justify-center items-center font-primary font-bold text-xl text-white bg-primary pt-[22px] pb-[19px] px-[113px] rounded-[5px]'><IoIosCall className='text-[30px] text-white '></IoIosCall> Call us to delivery  123-456789</button>
            </div>
        </div>
    </Container>
  )
}

export default Contact