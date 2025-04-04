import React from 'react'

const CaptainDetails = () => {
  return (
    <>
        <div className='flex items-center justify-between'>
                
            <div className='flex items-center justify-start gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src = "https://tse3.mm.bing.net/th?id=OIP.59hYtOrco0EZe3thkO8j1AHaE7&pid=Api&P=0&h=220" alt = ""></img>
                <h4 className='text-lg font-medium '>Harsh Patel</h4>
            </div>

            <div>
                <h4 className='text-xl font-semibold'>₹260</h4>
                <p className='text-sm bg-orange-400'>Earned</p>
            </div>
        </div>

        <div className='flex p-3 mt-3 bg-gray-200 justify-center gap-5 items-start'>
            <div className='text-center'>
                <i className="text-2xl mb-2 font-thin ri-timer-2-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
            </div>

            <div className='text-center'>
                <i className="text-2xl mb-2 font-thin ri-speed-up-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
            </div>

            <div className='text-center'>
                <i className="text-2xl mb-2 font-thin ri-booklet-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
        </div>
    </>
  )
}

export default CaptainDetails