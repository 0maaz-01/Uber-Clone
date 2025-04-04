import React from 'react';
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to = '/home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-2 right-5'>
            <i className="text-3xl font-bold ri-home-5-line"></i>
        </Link>

        <div className='h-1/2'>
            <img className = 'h-full w-full object-cover' src = "https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt = ""/>
        </div>

        <div className='h-1/2'>

            <div className='flex items-center justify-between pt-10'>
                <img className='h-12 ' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" /> 
                <div className='text- font-semibold -mt-1 -mb-1'>
                    <h2 className='text-lg font-medium'>Maaz</h2>
                    <h4 className='text-xl font-semibold'>RJ20 SA 6758</h4>
                    <p className='text-sm text-gray-600'>Swift Dzire</p>
                </div>
            </div>

            <div className='flex gap-5 justify-between flex-col items-center'>

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-2xl ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>8-C-51</h3>
                            <p className='text-base -mt-1'>Vigyan Nagar Extension Kota</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-5 p-3'>
                        <i className=" text-2xl ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹ 210</h3>
                            <p className='text-base -mt-1'>Cash</p>
                        </div>
                    </div>

                </div>
            </div>

            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding