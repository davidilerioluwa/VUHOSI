// "use server"

export const addUserToWaitlist = async (email: string) => {
  console.log(email);
  
   const response = await fetch(
    "https://api-dev.vuhosi.com/v1/waitlist",
    // "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:email}), 
    }
  )
  .then(async (response)=>{
    const result = await response.json();
  
    return {
      ok: response.ok,
      status: response.status,
      result,
    }; 
  })
  .catch(async (err)=>{
    const error= await err.json()
    return ({
      message: "something went wrong, check your connection and try again",
      isSuccesful:false,
      error:error
    })
    
  })
 

}