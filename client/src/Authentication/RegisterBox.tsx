import React from 'react'

export const RegisterBox = () => {
  return (
    <>
 <div className="w-full max-w-md mx-auto">
    <div className="text-center font-mada text-2xl font-bold">
    Register
    </div>
   </div>
  <div className="max-w-md w-full mx-auto h-3/5  mt-4 bg-darkWhite rounded p-8 rounded neoShadow">
    <form action="" className="space-y-5 w-full">
      <div>
        <label htmlFor="" className="text-md font-bold font-mada text-gray-600 block ml-1">Name</label>
        <input type="text" className="w-full neoShadow p-2 mt-1 bg-darkWhite mx-auto" />
        </div>
        <div>
        <label htmlFor="" className="text-md font-bold font-mada text-gray-600 block ml-1">Email</label>
        <input type="text" className="w-full neoShadow p-2 mt-1 bg-darkWhite mx-auto" />
        </div>
        <div>
        <label htmlFor="" className="text-md font-bold font-mada text-gray-600 block ml-1">Password</label>
        <input type="password" className="w-full  neoShadow p-2 mt-1 bg-darkWhite mx-auto" />
        </div>
        <div>
            <div className = "neoShadow mt-12">
          <button className="w-full py-2 px-4 hover:bg-green-500 text-white text-md bg-green-700  text-center">
            Sign Up
          </button>
      </div>
      </div>
      <div>
            <div className='g-sign-in-button neoShadow'>
              <div className="content-wrapper">
              <div className='logo-wrapper'>  
                  <img src='https://developers.google.com/identity/images/g-logo.png'/>
             </div>  
                     <span className='text-container text-center'> 
                    <span className="text-center">Sign in with Google</span>
                  </span>
              </div>  
            </div>
      </div>
      <div className="neoShadow">
      <button className="apple-sign-in">
         Sign in with Apple
      </button>
      </div>
    </form>
</div>
</>
  )
}
