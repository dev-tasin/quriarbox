import React from 'react'
import Container from '../Container/Container'
import { LuDot } from "react-icons/lu";


const Services = () => {
  return (
    <Container>
        <div>
            <div className='flex flex-col justify-center items-center pb-[86px]'>
                <h3 className='text-primary font-primary font-bold text-[31px] '>SERVICES</h3>
                <h3 className='text-[#11111D] font-primary font-extrabold text-[39px]'>Our services for you</h3>
            </div>
            <div className='flex justify-between'>
                <div className='w-[424px] bg-white px-[60px] pt-[67px] pb-[49px] rounded-[16px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="../../src/assets/sicon_one.png" alt="" />
                        <h5 className='font-primary text-[#464558] font-extrabold text-[25px] py-[30px]'>Business Services</h5>
                    </div>
                    <p className='w-[301px] text-[#7B7A8B] pb-[30px]'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Corporate goods</p>
                    </div>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Shipment</p>
                    </div>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Accesories</p>
                    </div>
                    <button className='font-bold text-[20px] px-[96px] py-[12px] w-full text-primary border-2 border-primary mt-[60px] hover:bg-primary duration-500 hover:text-white'>Learn more</button>
                </div>
                <div className='w-[424px] bg-white px-[60px] pt-[67px] pb-[49px] rounded-[16px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="../../src/assets/sicon_two.png" alt="" />
                        <h5 className='font-primary text-[#464558] font-extrabold text-[25px] py-[30px]'>Statewide Services</h5>
                    </div>
                    <p className='w-[301px] text-[#7B7A8B] pb-[30px]'>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Personal items</p>
                    </div>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Percels</p>
                    </div>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Documents</p>
                    </div>
                    <button className='font-bold text-[20px] px-[96px] py-[12px] w-full text-primary border-2 border-primary mt-[60px] hover:bg-primary duration-500 hover:text-white'>Learn more</button>
                </div>
                <div className='w-[424px] bg-white px-[60px] pt-[67px] pb-[49px] rounded-[16px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="../../src/assets/sicon_three.png" alt="" />
                        <h5 className='font-primary text-[#464558] font-extrabold text-[25px] py-[30px]'>Personal Services</h5>
                    </div>
                    <p className='w-[301px] text-[#7B7A8B] pb-[30px]'>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Gifts</p>
                    </div>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Package</p>
                    </div>
                    <div className='flex items-center'>
                        <LuDot className='text-primary text-[30px]'></LuDot>
                        <p className='font-primary font-medium text-[#7B7A8B] '>Documents</p>
                    </div>
                    <button className='font-bold text-[20px] px-[96px] py-[12px] w-full text-primary border-2 border-primary mt-[60px] hover:bg-primary duration-500 hover:text-white'>Learn more</button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Services