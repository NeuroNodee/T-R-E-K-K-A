"use client";
import PageTransition from '@/components/PageTransition'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SideNav from "./../../components/SideNav";
import ProfileBtn from '@/components/ProfileBtn';
import Notify from '@/components/Notify';
import Overview from '../overview/page';
import TravelKit from '../travelKit/page';
import Community from '../community/page';
const Dashboard = () => {

  //the following usesate are used solely for section navigation
  const [showOverview, setShowOverview] = useState(true);
  const [showTravelKit, setShowTravelKit] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const handleOverview = () => {
    setShowOverview(true);
    setShowTravelKit(false);
    setShowCommunity(false);
  }
  const handleTravelKit = () => {
    setShowOverview(false);
    setShowTravelKit(true);
    setShowCommunity(false);
  }
  const handleCommunity = () => {
    setShowOverview(false);
    setShowTravelKit(false);
    setShowCommunity(true);
  }



  return (
    <div className='dashboard-content'>
        <SideNav handleOverview={handleOverview} handleTravelKit={handleTravelKit} handleCommunity={handleCommunity}></SideNav>
        {showOverview && <Overview></Overview>}
        {showTravelKit && <TravelKit></TravelKit>}
        {showCommunity && <Community></Community>}
      </div>
    
  )
}

export default Dashboard