import React from 'react'
import Container from '../Container/Container'

const Update = () => {
  return (
    <div className='bg-[#222132] py-[84px]'> 
        <Container>
            <div className='flex justify-between items-center'>
                <div> 
                    <h4 className='font-primary font-extrabold text-white text-[39px]'>Get an update every week</h4>
                    <p className='w-[500px] font-primary text-[#C5C5D2]'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                </div>
                <div>
                    <h4 className='font-primary font-bold text-primary text-[18px] pb-[9px]'>SUBSCRIBE TO NEWSLETTER</h4>
                    <div className='flex justify-center items-center gap-x-[16px]'>
                        <input type="email" placeholder='Enter your mail' className='px-[18px] py-[15px] bg-transparent w-[386px] text-[#7B7A8B] border-2 border-[#C5C5D2] rounded-[8px]'/>
                        <button className='text-xl text-white font-primary font-bold bg-primary py-[12px] px-[20px]  rounded-[5px] '>Subscribe</button> 
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Update