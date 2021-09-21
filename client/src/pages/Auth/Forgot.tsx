import React, {useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect, Link } from "react-router-dom";
import { auth }from "../../config/firebase"
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';

interface FormData {
  email: string
}

const ForgotPasswordPage: React.FunctionComponent<IPageProps> = props => {

const [sending, setSending] = useState<boolean>(false)
const [sent, setSent] = useState<boolean>(false)
const [email, setEmail] = useState<string>("")
const {register, handleSubmit,  formState: { errors }  } = useForm<FormData>();

const onSubmit = handleSubmit(({email}) => {
  if (errors.email ) { return }
  setSending(true)
  auth.sendPasswordResetEmail(email)
  .then(() => {
    logging.info("Email sent.")
    setSending(false);
    setSent(true);
  })
  .catch(error => {
    logging.error(error);
    setSending(false);
  })
})

  return (
    <>
 <div className="w-full max-w-md mx-auto">
    <div className="text-center font-mada text-2xl font-bold">
   Send Password Reset
    </div>
   </div>
  <div className="max-w-md w-full mx-auto h-3/8  mt-4 bg-darkWhite rounded p-8 rounded neoShadow">
    { sent ? 
    < p className="text-md font-bold font-mada text-gray-600 block ml-1">A link has been sent to your email with instructions.</p> 
    :
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
          })}  type="text" className="w-full neoShadow p-3 mt-1 bg-darkWhite mx-auto outline-none" placeholder="sammy@gmail.com" 
          name="email"
          // value={email}
          // onChange={event => {
          //   setEmail(event.target.value)
          // }}
          />
          </div>
          <div className="text-md font-mada text-red-600 ml-2">
          {errors.email && "email is invalid" }
        </div>
        <div>
            <div className = "neoShadow mt-12">
          <button className="w-full py-3 px-4 hover:bg-green-500 text-white text-md bg-green-700  text-center">
            Send Email
          </button>
      </div>
      </div>
    </form>
}
</div>
</>
  )
}
export default ForgotPasswordPage