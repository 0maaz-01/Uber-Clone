import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() => {                      // this will allow us to show the icon only when the search part covers the entire screen.
            props.setVehiclePanelOpen(false)
                        }} 
            className="p-3 text-3xl text-center w-full absolute top-0"><i className="ri-arrow-down-wide-line"></i></h5>

            <h3 className="text-2xl font-semibold">Choose a Vehicle</h3>
                
            {/*For Car*/}
            <div onClick={() => {
                    props.setConfirmRidePanel(true),
                    props.setVehiclePanelOpen(false)
                }} 
                className="flex border-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-12" src = "https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"></img>
                <div className= "w-1/2">
                    <h4 className="font-medium text-base">Uber Go
                        <span><i className="ri-user-3-fill"></i></span>
                    </h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">Affordable compact rides.</p>
                </div>
                    <h2 className="text-2xl font-semibold">₹ 203</h2>
            </div>


            {/*For Auto*/}
            <div onClick={() => {
                    props.setConfirmRidePanel(true),
                    props.setVehiclePanelOpen(false)
                }}  className="flex border-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-12" src = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"></img>
                <div className= "w-1/2">
                    <h4 className="font-medium text-base">Auto
                        <span><i className="ri-user-3-fill"></i></span>
                    </h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">Affordable compact rides.</p>
                </div>
                    <h2 className="text-2xl font-semibold">₹ 110</h2>
                </div>


                {/*For Bike*/}
            <div onClick={() => {
                    props.setConfirmRidePanel(true),
                    props.setVehiclePanelOpen(false)
                }} 
                    className="flex border-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-12" src = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"></img>
                <div className= "w-1/2">
                    <h4 className="font-medium text-base">Bike
                        <span><i className="ri-user-3-fill"></i></span>
                    </h4>
                    <h5 className="font-medium text-sm">3 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">Affordable motorcycle rides.</p>
                </div>
                <h2 className="text-2xl font-semibold">₹ 80</h2>
            </div>
                
    </div>
  )
}

export default VehiclePanel