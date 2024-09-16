import AddWaitlist from "@/components/AddWaitlist";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid-pattern bg-deepBlue w-screen h-full min-h-screen">
      {/* top section */}
      <section className='w-full px-6 md:px-20 pb-8 md:pb-2 pt-2 md:py-6'>
        <div className='flex md:border border-grey500 py-3 rounded-full md:px-6 items-center justify-between'>
          <span className='p-2 text-xl md:text-3xl text-orange font-bold pr-4'>VUHOSI</span>
          <Button className='bg-orange hover:bg-orange/90 h-[48px] text-white text-sm font-bold rounded-3xl w-fit  text-nowrap px-4 md:px-12 py-2'>Join Waitlist</Button>
        </div>
      </section>

      {/* mid section */}
      <section className="flex flex-col lg:gap-3 w-full items-center justify-center md:p-4">
        <img src="logo.png" className="w-16 mb-2" />
        <p className="gradient-animation slideRightIn text-3xl pb-2 md:text-6xl font-bold bg-clip-text  text-transparent  bg-gradient-to-r from-orange to-lightOrange">AI-Powered Insights</p>
        <p className="slideLeftIn  text-3xl md:text-6xl font-bold text-white  text-center" >For Startups And Investors</p>
        <p className="text-grey300 text-center px-4 md:px-40 lg:px-60 xl:px-80 my-3 text-sm">Optimise your startup with critical intelligence to help identify risks and opportunities, guiding you to develop market-fit products, build strong teams, and scale your startup confidently</p>
        <div className="w-full flex flex-col items-center justify-center">
          {/* searchbox */}
          <AddWaitlist />
          <label className="text-grey400 mt-2 text-sm w-full text-center hidden md:block">
            Join our waitlist and get early access when we launch
          </label>
        </div>
      </section>

      {/* lower section */}
      <section className="px-6 md:px-20 lg:px-40 xl:px-60 pt-6 md:pt-2  pb-4">
        <div className="border border-grey600 flex flex-col gap-3 items-center justify-center rounded-md p-[40px]">
          <p className="text:-xl leading-[23.2px] md:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-lightOrange">Schedule A Meeting</p>
          <p className="text-center leading-[23.2px] text-grey300 md:px-10 lg:px-20 xl:px-40">If you are interested in investing in Vuhosi, schedule a meeting with our Investment team or reach out at <span className="text-orange">invest@vuhosi.com</span> for more details. </p>
          <Link    href="https://calendly.com/developer-vuhosi/30min"
              target="_blank" className="border border-grey500 bg-deeperBlue rounded-3xl px-6 py-[10px] text-white text-sm mt-2">Schedule A Meeting</Link>
        </div>
      </section>
    </div>
  );
}
