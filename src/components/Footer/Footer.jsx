import React from 'react'
import Container from '../Container/Container'

const Footer = () => {
  return (
    <div className='bg-[#2F2E41] pt-[50px] pb-[56px]'>
        <Container>
            <div className='flex justify-between'>
                <div className='w-1/3'>
                    <img src="../../src/assets/footerlogo.png" alt="" />
                    <p className='w-[190px] font-primary font-semibold text-[#9291A1] pt-[12px]'>The most trusted Courier
                    company in your area.</p>
                </div>
                <div className='flex flex-col'>
                    <h5 className='font-primary font-bold text-[20px] text-white pb-[22px]'>Other links</h5>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>Blogs</a>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>Movers website</a>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>Traffic Update</a>
                </div>
                <div className='flex flex-col'>
                    <h5 className='font-primary font-bold text-[20px] text-white pb-[22px]'>Services</h5>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>Corporate goods</a>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>Artworks</a>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>Documents</a>
                </div>
                <div className='flex flex-col'>
                    <h5 className='font-primary font-bold text-[20px] text-white pb-[22px]'>Customer Care</h5>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>About Us</a>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>Contact US</a>
                    <a href="#" className='font-primary font-semibold text-[#9291A1]'>Get Update</a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer