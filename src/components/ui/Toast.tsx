import React from 'react'
import { IoMdWarning } from "react-icons/io";

const Toast = ({message,isSucessful,setDisplayToast}:{message:string,isSucessful:boolean,setDisplayToast:any}) => {
  return (
    <div className='fixed flex items-center justify-center top-0 left-0 w-screen h-screen p-4'>
      <div className='relative bg-white w-full md:w-96  h-60 bg-white-400 flex flex-col p-4 gap-8 items-center justify-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-grey400'>
          <div className='absolute text-xl top-3 right-3 cursor-pointer text-red-500 bg-white px-4 pb-2 pt-1  rounded-md' onClick={()=>setDisplayToast(false)}>x</div>
          <div className='text-white text-5xl'><IoMdWarning/></div>
          <p className='text-white'>{message}</p>
      </div>
    </div>
  )
}

export default Toast