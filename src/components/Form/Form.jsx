import React from 'react'
import Container from '../Container/Container'
import { FaTelegramPlane } from "react-icons/fa";


const Form = () => {
  return (
    <Container>
        <div className='flex justify-center items-center gap-x-[24px] py-[172px]'>
            <div>
                <img src="../../src/assets/pform.png" alt="" />
                <h5 className='font-primary font-bold text-[24px] text-primary'>REQUEST A CALLBACK</h5>
                <h4 className='w-[412px] font-primary font-extrabold text-[39px] text-[#222132] pt-[20px]'>We will contact in the shortest time.</h4>
                <p className='font-primary font-semibold text-[25px] text-[#9291A1]'>Monday to Friday, 9am-5pm.</p>
            </div>
            <div className='flex flex-col'>
                <input type="text" placeholder='Name' className='px-[20px] py-[15px] bg-transparent w-[424px] text-[#9291A1] border-2 border-[#9291A1] rounded-[8px]  mb-[16px]'/>
                <input type="email" placeholder='Email' className='px-[20px] py-[15px] bg-transparent w-[424px] text-[#9291A1] border-2 border-[#9291A1] rounded-[8px]  mb-[16px]'/>
                <input type="text" placeholder='Message' className='px-[20px] pt-[15px] pb-[118px] bg-transparent w-[424px] text-[#9291A1] border-2 border-[#9291A1] rounded-[8px]  mb-[16px]'/>
                <button className='flex items-center gap-x-4 font-primary text-xl font-bold text-white py-3 px-[125px] bg-primary rounded-[5px] mt-[54px]'>Send Message  <FaTelegramPlane></FaTelegramPlane></button>
            </div>
        </div>
    </Container>
  )
}

export default Form