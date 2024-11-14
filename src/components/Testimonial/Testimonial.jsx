import React from 'react'
import Container from '../Container/Container'
import { FaStar } from "react-icons/fa";


const Testimonial = () => {
  return (
    <Container>
        <div className='pt-[150px] pb-[90px] flex flex-col justify-center items-center'>
            <div className='flex gap-x-[38px]'>
                <img src="../../src/assets/ticon.png" alt="" className='w-[110px] h-[83px]'/>
                <div className='flex flex-col justify-center items-center'> 
                    <h3 className='text-primary font-primary font-bold text-[31px] '>TESTIMONIAL</h3>
                    <h3 className='text-[#11111D] font-primary font-extrabold text-[39px]'>Our Awesome
                    Clients</h3>
                </div>
            </div>
            <div className='bg-white pt-[39px] pl-[39px] pr-[29px] pb-[34px] mt-[89px] rounded-[16px]'>
                <h5 className='font-primary text-primary text-[25px] font-bold pb-[10px]'>Fantastic service!</h5>
                <p className='w-[800px] font-primary text-[#464558]'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                <div className='pt-[15px] flex justify-between items-center'>
                    <div className='flex text-primary gap-x-[7px] text-[22px]'>
                        <FaStar></FaStar> 
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <div className='flex justify-center items-center gap-x-[13px]'>
                        <div>
                            <h5 className='text-[#222132] font-bold font-primary'>Yves Tanguy</h5>
                            <h6 className='font-primary text-[#464558'>Chief Executive, DLF</h6>
                        </div>
                        <div>
                            <img src="../../src/assets/tpic.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Testimonial