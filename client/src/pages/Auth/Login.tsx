import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from "react-router-dom";
import { auth }from "../../config/firebase"
import logging from '../../config/logging';

interface FormData {
  name: string
  email: string
  password: string
}

const LoginPage = () => {
const [authenticating, setAuthenticating] = useState<boolean>(false)
const {register, handleSubmit,  formState: { errors }  } = useForm<FormData>();
const onSubmit = handleSubmit(({name, email,password}) => {

  if (errors.email  || errors.password) { return }
      setAuthenticating(true)  
      auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        logging.info(result)
        history.push("/")
      })
      .catch(error => {
        logging.error(error);
        setAuthenticating(false)
      })
})

const history = useHistory();

  return (
    <>
 <div className="w-full max-w-md mx-auto">
    <div className="text-center font-mada text-2xl font-bold">
    Login
    </div>
   </div>
  <div className="max-w-md w-full mx-auto h-3/5  mt-4 bg-darkWhite rounded p-8 rounded neoShadow">
    <form action="" onSubmit={onSubmit} className="space-y-5 w-full">
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
            <div className = "neoShadow mt-12">
          <button className="w-full py-3 px-4 hover:bg-green-500 text-white text-md bg-green-700  text-center">
            Login
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
        <div className="m-1 text-center text-green-700 font-mada">Dont have an account? <Link to="/register" className="text-green-700">Register Here.</Link></div>
      </div>
      <div>
      </div>
    </form>
</div>
</>
  )
}
export default LoginPage