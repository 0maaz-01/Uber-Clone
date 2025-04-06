import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' 
             onClick={() => {props.setWaitingForDriver(false)}}
          >

            <i className="text-4xl text-black ri-arrow-down-wide-line"></i>
        </h5>
        
        <div className='flex items-center justify-between'>
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
              
              <button // onClick = { () => {props.setIsRiding(true)}}
                    className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>

    </div>
  )
}

export default WaitingForDriver