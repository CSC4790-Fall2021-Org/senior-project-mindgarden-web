import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from "react-router-dom";
import { auth }from "../../config/firebase"

interface FormData {
  name: string
  email: string
  password: string
}

const RegisterPage = () => {
const [registering, setRegistering] = useState<boolean>(false);
const {register, handleSubmit,  formState: { errors }  } = useForm<FormData>();
const onSubmit = handleSubmit(({name, email,password}) => {
  if (errors.email || errors.name || errors.password) { return }
    // create and save new user in firebase 
    setRegistering(true);
    auth.createUserWithEmailAndPassword(email, password)
    .then(result => {
       history.push("/login")
    })
    .catch(error => {
        alert(error)
    })
    setRegistering(false)
})

const history = useHistory();

  return (
    <>
 <div className="w-full max-w-md mx-auto">
    <div className="text-center font-mada text-2xl font-bold">
    Register
    </div>
   </div>
  <div className="max-w-md w-full mx-auto h-3/4  mt-4 bg-darkWhite rounded p-8 rounded neoShadow">
    <form action="" onSubmit={onSubmit} className="space-y-5 w-full">
      <div>
        <label htmlFor="" className="text-md font-bold font-mada text-gray-600 block ml-1">Name</label>
        <input  {...register("name", {required: true})} name="name" type="text" className="w-full neoShadow p-3 mt-1 bg-darkWhite mx-auto outline-none" placeholder="Sammy"  />
        <div className="text-md font-mada text-red-600 ml-2">
        {errors.name && "Name is invalid" }
        </div>
        </div>
        <div>
        <label htmlFor="" className="text-md font-bold font-mada text-gray-600 block ml-1">Email</label>
        <input  {...register("email", {
          required: true, 
          minLength: 6, 
          maxLength: 24,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
          })}  type="text" className="w-full neoShadow p-3 mt-1 bg-darkWhite mx-auto outline-none" placeholder="sammy@gmail.com" name="email"/>
        <div className="text-md font-mada text-red-600 ml-2">
        {errors.email && "Email is invalid" }
        </div>
        </div>
        <div>
        <label htmlFor="" className="text-md font-bold font-mada text-gray-600 block ml-1">Password</label>
        <input  {...register("password", {
          required: true,
          minLength: 6, 
          maxLength: 24,
        })}   type="password" className="w-full  neoShadow p-3 mt-1 bg-darkWhite mx-auto outline-none" placeholder="**********" name="password" />
        <div className="text-md font-mada text-red-600 ml-2">
          {errors.password && "Password is invalid" }
        </div>
        </div>
        <div>
            <div className = "neoShadow mt-20">
          <button className="w-full py-3 px-4 hover:bg-green-500 text-white text-md bg-green-700  text-center">
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
      <div>
        <div className="m-1 text-center font-mada">Already have an account? <Link to="/login" className="text-green-700">Login Here.</Link></div>
      </div>
    </form>
</div>
</>
  )
}
export default RegisterPage