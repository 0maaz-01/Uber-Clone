import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

    const [ ridePopupPanel, setRidePopupPanel ] = useState(true)
    const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(false)

    const ridePopupPanelRef = useRef(null)
    const confirmRidePopupPanelRef = useRef(null)


    
    useGSAP(function() {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
                transform : 'translateY(0)'
            })
        }
        else{
            gsap.to(ridePopupPanelRef.current, {
                transform : 'translateY(100%)'
            })
        }
    }, [ridePopupPanel])


    useGSAP(function() {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform : 'translateY(0)'
            })
        }
        else{
            gsap.to(confirmRidePopupPanelRef.current, {
                transform : 'translateY(100%)'
            })
        }
    }, [confirmRidePopupPanel])



  return (
      <div className='h-screen'>
          <div className='fixed p-4 top-0 flex items-center justify-between w-screen'>
              <img className = 'w-16' src = "https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt = ""/>
                  <Link to = '/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                      <i className = "text-2xl ri-logout-box-r-line"></i>
                  </Link>
          </div>

          <div className='h-4/6'>
              <img className = 'h-full w-full object-cover' src = "https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt = ""/>
          </div>

          <div className='h-2/6 p-4 mt-1'>
                <CaptainDetails/>
          </div>

          <div ref = {ridePopupPanelRef} className="fixed w-full z-10 bottom-0 bg-white translate-y-full p-3 py-8 px-3 pt-12">
                  <RidePopUp setRidePopupPanel = {setRidePopupPanel} setConfirmRidePopupPanel = {setConfirmRidePopupPanel}/>
          </div>

          <div ref = {confirmRidePopupPanelRef} className="fixed w-full z-10 bottom-0 bg-white translate-y-full h-screen p-3 py-8 px-3 pt-12">
                  <ConfirmRidePopUp setConfirmRidePopupPanel = {setConfirmRidePopupPanel}/>
          </div>
      </div>
  )
}

export default CaptainHome