import React from 'react'
import Container from '../Container/Container'
import { FaArrowRight } from "react-icons/fa";


const Banner = () => {
  return (
    <Container>
        <div className='py-[170px] flex justify-between'>
            <div>
                <h1 className='w-[516px] text-[#261134] font-primary text-[49px]'>A trusted provider of <span className='font-extrabold'>courier services.</span></h1>
                <p className='w-[330px] text-[#4D4D4D] font-primary text-[20px] pt-4 pb-10'>We deliver your products safely to your home in a reasonable time.</p>
                <button className='flex items-center gap-x-4 font-primary text-xl font-bold text-white py-3 px-5 bg-primary'>Get started  <FaArrowRight></FaArrowRight></button>
            </div>
            <div>
              <img src="../../src/assets/banner.png" alt="" />
            </div>
        </div>
    </Container>
  )
}

export default Banner