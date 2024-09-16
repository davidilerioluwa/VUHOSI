
export default function Home() {
  return (
    <div className=" bg-deepBlue w-screen h-full min-h-screen">
      {/* top section */}
      <section className='w-full px-6 md:px-20 pb-8 md:pb-2 pt-2 md:py-6'>
        <div className='flex md:border border-grey500 rounded-3xl md:px-6 items-center justify-between'>
            <span className='p-2 text-xl md:text-3xl text-orange font-bold pr-4'>VUHOSI</span>
            <button className='bg-orange text-white text-sm font-bold rounded-3xl w-fit h-fit text-nowrap px-4 md:px-12 py-2'>Join Waitlist</button>
        </div>
      </section>
      
      {/* mid section */}
      <section className="flex flex-col w-full items-center justify-center md:p-4">
        <img src="logo.png" className="w-16 mb-2"/>
        <p className="gradient-animation slideRightIn text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-lightOrange">AI POWERED INSIGHTS</p>
        <p  className="slideLeftIn text-3xl md:text-6xl font-bold text-white text-center" >For Startups And Investors</p>
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

      {/* lower section */}
      <section className="px-6 md:px-20 lg:px-40 xl:px-60 pt-6 md:pt-2  pb-4">
        <div className="border border-grey600 flex flex-col items-center justify-center rounded-md p-4">
          <p className="text:-xl md:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-lightOrange">Schedule A Meeting</p>
          <p className="text-center text-grey300 md:px-10 lg:px-20 xl:px-40">If you are interested in investing in Vuhosi, schedule a meeting with our Investment team or reach out at <span className="text-orange">invest@vuhosi.com</span> for more details. </p>
          <button className="border border-grey500 bg-deeperBlue rounded-3xl px-6 py-2 text-white text-sm mt-2">Schedule A Meeting</button>
        </div>
      </section>
    </div>
  );
}
