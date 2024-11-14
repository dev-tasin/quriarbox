import React from 'react'
import Container from '../Container/Container'

const Counter = () => {
  return (
    <Container>
        <div className='pt-[172px] pb-[162px] flex justify-between items-center'>
            <div className='flex flex-col justify-center items-center'>
                <img src="../../src/assets/cicon_one.png" alt="" className='h-[67px]'/>
                <span className='pt-[19px] pb-[6px] font-extrabold text-[39px] text-primary'>26+</span>
                <p className='font-primary font-bold text-[20px] text-[#464558]'>Awards  won</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src="../../src/assets/cicon_two.png" alt=""/>
                <span className='pt-[28px] pb-[6px] font-extrabold text-[39px] text-primary'>65+</span>
                <p className='font-primary font-bold text-[20px] text-[#464558]'>States covered</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src="../../src/assets/cicon_three.png" alt=""/>
                <span className='pt-[28px] pb-[6px] font-extrabold text-[39px] text-primary'>689K+</span>
                <p className='font-primary font-bold text-[20px] text-[#464558]'>Happy clients</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src="../../src/assets/cicon_four.png" alt=""/>
                <span className='pt-[28px] pb-[6px] font-extrabold text-[39px] text-primary'>130M+</span>
                <p className='font-primary font-bold text-[20px] text-[#464558]'>Goods delivered</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src="../../src/assets/cicon_five.png" alt="" />
                <span className='pt-[28px] pb-[6px] font-extrabold text-[39px] text-primary'>130M+</span>
                <p className='font-primary font-bold text-[20px] text-[#464558]'>Business hours</p>
            </div>
        </div>
    </Container>
  )
}

export default Counter