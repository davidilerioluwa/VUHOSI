import MidSection from "./MidSection";

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
    <MidSection/>

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
