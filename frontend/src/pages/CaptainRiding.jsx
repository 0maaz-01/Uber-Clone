import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
    <div>

        <div className='h-screen'>
            <div className='fixed p-4 top-0 flex items-center justify-between w-screen'>
                <img className = 'w-16' src = "https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt = ""/>
                    <Link to = '/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                        <i className = "text-2xl ri-logout-box-r-line"></i>
                    </Link>
            </div>

            <div className='h-4/5'>
                <img className = 'h-full w-full object-cover' src = "https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt = ""/>
            </div>

            {/*Relative likne se down arrow visible ho gaya*/}
            <div className='relative h-1/5 p-6 flex items-center justify-between bg-yellow-400'>
                <h5 className='p-1 text-center w-[93%] cursor-pointer absolute top-1' 
                    onClick={() => {}}>
                    <i class="text-4xl ri-arrow-up-wide-line"></i>
                </h5>
                 <h4 className='text-xl font-semibold'>4 KM away</h4> 
                 <button className = ' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>

        </div>
    </div>
  )
}

export default CaptainRiding