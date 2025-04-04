import React, { useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useRef } from "react";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";
import Riding from "./Riding";



const Home = () => {

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false) 
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const [isRiding, setIsRiding] = useState(true)

    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const isRidingRef = useRef(null)




    const submitHandler = (e) => {
        e.preventDefault();
    }
 

    // panelRef contains the reference of the screen where search result will be displayed.
    useGSAP(function() {
        // if the user clicks on one of the two fields this search box will open
        if (panelOpen){
            gsap.to(panelRef.current, {
                height : '70%', 
                
                opacity : 1
            })

            gsap.to(panelCloseRef.current, {
                opacity : 1
            })
        }

        else{
            gsap.to(panelRef.current, {
                height : '0%',
                opacity : 0
            })

            gsap.to(panelCloseRef.current, {
                opacity : 0
            })

        }
    }, [panelOpen])



    useGSAP(function() {
        if (vehiclePanelOpen) {
            gsap.to(vehiclePanelRef.current, {
                transform : 'translateY(0)'
            })
        }
        else{
            gsap.to(vehiclePanelRef.current, {
                transform : 'translateY(100%)'
            })
        }
    }, [vehiclePanelOpen])



    useGSAP(function() {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform : 'translateY(0)'
            })
        }
        else{
            gsap.to(confirmRidePanelRef.current, {
                transform : 'translateY(100%)'
            })
        }
    }, [confirmRidePanel])


    useGSAP(function() {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform : 'translateY(0)'
            })
        }
        else{
            gsap.to(vehicleFoundRef.current, {
                transform : 'translateY(100%)'
            })
        }
    }, [vehicleFound])


    useGSAP(function() {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform : 'translateY(0)'
            })
        }
        else{
            gsap.to(waitingForDriverRef.current, {
                transform : 'translateY(100%)'
            })
        }
    }, [waitingForDriver])


    useGSAP(function() {
        if (isRiding) {
            gsap.to(isRidingRef.current, {
                transform : 'translateY(0)'
            })
        }
        else{
            gsap.to(isRidingRef.current, {
                transform : 'translateY(100%)'
            })
        }
    }, [isRiding])






    return (
        <div className="h-screen relative overflow-hidden">
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

            <div className='h-screen w-screen'>
                <img className = 'h-full w-full object-cover' src = "https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt = ""/>
                {/*<LiveTracking />*/}
            </div>

            <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
                
                <div className="h-[30%] p-6 bg-white relative">
                    {/**/}
                    <h5  ref = { panelCloseRef }        // this will allow us to show the icon only when the search part covers the entire screen.
                        onClick={() => {
                            setPanelOpen(false)
                        }} 
                        className='absolute top-6 right-6 text-3xl opacity-0'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit = {(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[60%] -translate-y-1/2 left-10 bg-gray-700 rounded-full"></div>
                        
                        <input value = {pickup}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
                            type="text" 
                            placeholder="Add a pickup location."
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            />

                        <input value = {destination}
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }}
                                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
                                type="text" 
                                placeholder="Add your destination."
                                onClick={() => {
                                    setPanelOpen(true)
                            }} />
                    </form>
                </div>

                <div ref = {panelRef}
                     className="bg-white h-0 top-0">
                        <LocationSearchPanel setPanelOpen = {setPanelOpen} setVehiclePanelOpen = {setVehiclePanelOpen}/>
                </div>

            </div>

            {/*translate-y-0 will remove the select vehicle part from the screen.*/}
            <div ref = {vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-8 px-3 pt-12">
                  <VehiclePanel setConfirmRidePanel = {setConfirmRidePanel} setVehiclePanelOpen = {setVehiclePanelOpen} />
            </div>


            <div ref = {confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 pt-12 px-3">
                  <ConfirmRide setConfirmRidePanel = {setConfirmRidePanel} setVehicleFound = {setVehicleFound}/>
            </div>


            <div ref = {vehicleFoundRef}  className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 pt-12 px-3">
                <LookingForDriver setVehicleFound = {setVehicleFound}/>
            </div>


            <div ref = {waitingForDriverRef} className="fixed w-full z-10 bottom-0 bg-white p-3 py-6 pt-12 px-3">
                <WaitingForDriver setIsRiding = {setIsRiding} setWaitingForDriver = { setWaitingForDriver } />
            </div>


            <div ref = {isRidingRef} className="fixed w-full z-10 bottom-0 bg-white py-6 pt-12 px-3 translate-y-full">
                  <Riding/>
            </div>

        </div>
    )
}


export default Home;