import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
            props.setVehicleFound(false)
            }}>
            <i className="text-4xl text-black ri-arrow-down-wide-line"></i></h5>
        
        <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

        <div className='flex gap-5 justify-between flex-col items-center'>
            <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
              

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
              
        </div>

    </div>
  )
}

export default LookingForDriver