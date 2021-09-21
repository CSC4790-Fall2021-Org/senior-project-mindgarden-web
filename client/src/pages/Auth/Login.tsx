import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from "react-router-dom";
import { auth, Providers }from "../../config/firebase"
import logging from '../../config/logging';
import firebase from 'firebase';
import { SignInWithSocialMedia } from './modules';

interface FormData {
  name: string
  email: string
  password: string
}

const LoginPage = () => {
const [authenticating, setAuthenticating] = useState<boolean>(false)
const {register, handleSubmit,  formState: { errors }  } = useForm<FormData>();
const [password, setPassword] = useState<string>("")
const [email, setEmail] = useState<string>("")
const [firebaseError, setFirebaseError ] = useState<string>("")

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
        setFirebaseError("Your email or password is invalid");
        setAuthenticating(false)
      })
})

const history = useHistory();
const appleProvider = new firebase.auth.OAuthProvider('apple.com');
appleProvider.addScope('email');
appleProvider.addScope('name');
const googleProvider = new firebase.auth.OAuthProvider('google.com');
const signInWithSocialMedia = (provider: firebase.auth.OAuthProvider) => {
  setAuthenticating(true)

  SignInWithSocialMedia(provider)
  .then(result => {
    logging.info(result)
    history.push("/")
  })
  .catch(error => {
    logging.error(error);
    setFirebaseError("There was a problem signing in");
    setAuthenticating(false)
  })
}
  return (
    <>
 <div className="w-full max-w-md mx-auto">
    <div className="text-center font-mada text-2xl font-bold">
    Login
    </div>
   </div>
  <div className="max-w-md w-full mx-auto h-3/5  mt-4 bg-darkWhite rounded p-8 rounded neoShadow">
    <div className="space-y-5 w-full">
    <form action="" onSubmit={onSubmit} >
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
          })}  type="text" className="w-full neoShadow p-3 mt-1 bg-darkWhite mx-auto outline-none" placeholder="sammy@gmail.com" 
          name="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value)
            setFirebaseError("")
          }}/>
        <div className="text-md font-mada text-red-600 ml-2">
        {errors.email && "Email is invalid" }
        </div>
        </div>
        <div>
        <label htmlFor="" className="text-md font-bold font-mada text-gray-600 block ml-1 mt-2">Password</label>
        <input  {...register("password", {
          required: true,
          minLength: 6, 
          maxLength: 24,
        })}   type="password" className="w-full  neoShadow p-3 mt-1 bg-darkWhite mx-auto outline-none" placeholder="**********" 
        name="password"
        value={password}
        onChange={event => {
          setPassword(event.target.value)
          setFirebaseError("")
        }}
        />
        <div className="text-md font-mada text-red-600 ml-2">
          {errors.password && "Password is invalid" }
        </div>
        <div className="text-md font-mada text-red-600 ml-2 text-center">
        {firebaseError }
          </div>
        </div>
        <div>
            <div className = "neoShadow mt-12">
          <button className="w-full py-3 px-4 hover:bg-green-500 text-white text-md bg-green-700  text-center">
            Login
          </button>
      </div>
      </div>
    </form>
    <div>
            <div className='g-sign-in-button neoShadow'>
              <div className="content-wrapper">
              <div className='logo-wrapper'>  
                  <img src='https://developers.google.com/identity/images/g-logo.png'/>
             </div>  
                     <span className='text-container text-center'> 
                    <button 
                    className="text-center"
                    onClick={() => signInWithSocialMedia(googleProvider)}
                    >Sign in with Google</button>
                  </span>
              </div>  
            </div>
      </div>
      <div className="neoShadow">
      <button 
      className="apple-sign-in"                     
      onClick={() => signInWithSocialMedia(appleProvider)}
    >
         Sign in with Apple
      </button>
      </div>
      <div>
        <div className="m-1 text-center  font-mada">Dont have an account? <Link to="/register" className="text-green-700">Register Here.</Link></div>
        <div className="m-1 text-center  font-mada">Forgot Password? <Link to="/forgot" className="text-green-700">Reset Here.</Link></div>
      </div>
</div>
</div>
</>
  )
}
export default LoginPage