import React from 'react'
import Container from '../Container/Container'
import { IoIosPlay } from "react-icons/io";


const Video = () => {
  return (
    <Container>
        <div className='bg-video_bg pt-[126px] pb-[168px] rounded-[16px]'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[86px] h-[86px] mb-[20px] rounded-full bg-primary flex justify-center items-center'>
                    <a href="#">
                        <IoIosPlay className='text-white text-[40px]'></IoIosPlay>
                    </a>
                </div>
                <h4 className='font-primary font-bold text-[31px] text-primary pb-[28px]'>FASTEST DELIVERY</h4>
                <p className='w-[673px] font-primary text-[25px] text-white text-center'>You can get your valuable item in the fastest period of
                   time with safety. Because your emergency
                   is our first priority.
                </p>
            </div>
        </div>
    </Container>
  )
}

export default Video