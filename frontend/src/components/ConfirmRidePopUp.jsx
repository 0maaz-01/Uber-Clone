import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  return (
        <div>
            <h5 className='p-1 text-center cursor-pointer w-[93%] absolute top-1' onClick={() => {
                props.setConfirmRidePopupPanel(false)
                }}>
                <i className="text-4xl text-black ri-arrow-down-wide-line"></i>
            </h5>
        
            <h3 className='text-2xl font-semibold mb-4'>Confirm this ride to Start</h3>

            <div className='flex items-center justify-between bg-yellow-400 p-2 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src = "https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947"></img>
                    <h2 className=' text-lg font-semibold'>Keshav Gautam</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 Km</h5>
            </div>

            <div className='flex -mt-4 justify-between flex-col items-center'>            

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-2xl ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>8-C-51</h3>
                            <p className='text-base -mt-1'>Vigyan Nagar Extension Kota</p>
                        </div>
                    </div>


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
                
                <Link to = '/captain-riding' onClick = {() => {
                        props.setVehicleFound(true),
                        props.setConfirmRidePanel(false)  
                    }}
                        className='w-full mt-2 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg'>Accept
                </Link>

                <button onClick = {() => {
                    props.setConfirmRidePopupPanel(false)
                    }}
                        className='w-full mt-4 bg-red-700 text-white font-semibold p-2 rounded-lg'>Cancel
                </button>
            </div>
        </div>
  )
}

export default ConfirmRidePopUp