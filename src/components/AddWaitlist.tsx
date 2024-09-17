"use client"
import React, { useRef } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,

} from "@/components/ui/form"
import { toast } from 'sonner'
import { addUserToWaitlist } from '@/lib/tempActions'


const FormSchema = z.object({
  email_address: z.string().email(),
})

function AddWaitlist() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })
  const isPending = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {

      const response = await addUserToWaitlist(values);

      if (!response.ok) {
        toast.error(
          response.result.detail || "An error occurred. Please try again later"
        );
        return;
      }


      form.reset();
      toast.success("You've been added successfully to the waitlist!");
    } catch (error) {
      toast.error("An error occurred. Please try again later")
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-80 md:w-96 md:border border-grey500 flex flex-col gap-4 md:gap-2 md:bg-[#1D2739] md:flex-row p-1 rounded-3xl items-center justify-center">
            <FormField
              control={form.control}
              name="email_address"
              render={({ field }) => (
                <>

                  <FormControl>
                    <Input {...field} type="text" placeholder="Enter Your Ema&#8204;il Address" name="randomized-name-123456"  className="text-sm focus-visible:ring-0 focus:ring-0 focus:outline-0 text-grey500 border border-grey500 md:border-none p-4 md:p-2 bg-[#1D2739]  outline-none focus:outline-none w-full rounded-3xl" />
                  </FormControl>
                </>

              )}
            />



            <Button disabled={isPending} className="text-nowrap hover:bg-deepBlue bg-orange text-white w-fit px-6 py-3 rounded-3xl text-sm">{isPending ? "Joining..." : "Join Waitlist"}</Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default AddWaitlist