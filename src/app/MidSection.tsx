"use client"

import React from 'react'
import { ReactTyped } from 'react-typed'
const MidSection = () => {
  return (
<section className="flex flex-col w-full items-center justify-center md:p-4">
    <img alt='logo' src="logo.png" className="w-16 mb-2"/>
    <p className="slideRightIn text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-lightOrange"> <ReactTyped strings={["AI POWERED INSIGHTS"]} typeSpeed={60}/></p>
    <p  className="slideLeftIn text-3xl md:text-6xl font-bold text-white text-center" ><ReactTyped strings={["For Startups And Investors"]} typeSpeed={60}/></p>
    <p className="text-grey300 text-center px-4 md:px-40 lg:px-60 xl:px-80 my-3 text-sm">Optimise your startup with critical intelligence to help identify risks and opportunities, guiding you to develop market-fit products, build strong teams, and scale your startup confidently</p>
    <div className="w-full flex flex-col items-center justify-center">
      {/* searchbox */}
      <div className="w-80 md:w-96 md:border border-grey500 flex flex-col gap-4 md:gap-2 md:flex-row p-1 rounded-3xl items-center justify-center">
          <input type="text" placeholder="Enter Your Email Address" className="text-sm text-grey500 border border-grey500 md:border-none p-4 md:p-2 bg-deepBlue outline-none w-full rounded-3xl"/>
          <button className="text-nowrap bg-orange text-white w-fit px-6 py-3 rounded-3xl text-sm">Join Waitlist</button>
      </div>
      <label className="text-grey400 text-sm w-full text-center hidden md:block">
          Join our waitlist and get early access when we launch
      </label>
    </div>
</section>
  )
}

export default MidSection