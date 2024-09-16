"use server"

export const addUserToWaitlist = async (values: any) => {
   const response = await fetch(
    "⁠https://api-dev.vuhosi.com/v1/waitlist",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values), 
    }
  );
  const result = await response.json(); 
  return {
    ok: response.ok,
    status: response.status,
    result,
  }; 

}