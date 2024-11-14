import React from 'react'
import Container from '../Container/Container'

const Footercopy = () => {
  return (
    <div className='bg-[#222132] py-[30px]'>
        <Container>
            <div className='flex justify-between'>
                <p className='font-primary font-medium text-[13px] text-[#DBDBE9]'>All rights Reserved © Your Company, 2021</p>
                <p className='font-primary font-medium text-[13px] text-[#DBDBE9]'>Made with heart by <span className='text-primary'>ThemeWagon</span></p>
            </div>
        </Container>
    </div>
  )
}

export default Footercopy