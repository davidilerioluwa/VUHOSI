"use client"
import React, { useState } from 'react'
import { addUserToWaitlist } from '@/lib/AddUserToWaitlist'
import Toast from './Toast'

const EmailInput =  () => {
    const [email,setEmail] = useState("")
    const [displayToast,setDisplayToast]=useState(true)
    const [toast,setToast]=useState({
        message:"hello",
        isSuccesful:true
    })
    
  return (
        <div className="w-80 md:w-96 md:border border-grey500 flex flex-col gap-4 md:gap-2 md:bg-[#1D2739] md:flex-row p-1 rounded-3xl items-center justify-center">
            {displayToast?<Toast message={toast.message} isSucessful={toast.isSuccesful} setDisplayToast={setDisplayToast}/>:""}
            <input onChange={(e)=> setEmail(e.target.value) } 
              type="text" placeholder="Enter Your Email Address" className="text-sm text-grey500 border border-grey500 md:border-none p-4 md:p-2 bg-[#1D2739] outline-none w-full rounded-3xl"/>
            <button onClick={ async (e)=>{{
                e.preventDefault()
                const response = await addUserToWaitlist(email)
                console.log(response);
                
            }}} className="text-nowrap bg-orange text-white w-fit px-6 py-3 rounded-3xl text-sm">Join Waitlist</button>
        </div>
  )
}

export default EmailInput