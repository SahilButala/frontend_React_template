import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../../store/auth'
import getErrorMessage from "../../utils/get-error-message"
import { initialLoginFromData, loginFormControllers } from '../../config/data'
import { toast } from 'react-toastify'
import CommonFormComponent from '../../utils/common-from'
import { Link } from 'react-router-dom'


const Login = () => {

  const [formdata, setformdata] = useState(initialLoginFromData)
  const dispatch = useDispatch()
  

  // login api call
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(LoginUser(formdata)).unwrap();
      console.log(res);
      toast.success(res.message);
    } catch (error) {
      console.error(error);
      console.log(error?.message);
      toast.error(getErrorMessage(error));

    }
  }

  return (
    <div className="mx-auto w-full max-w-md border p-5 h-100 ">
      <div className="text-center mb-5">
        <h1 className="font-bold text-4xl mb-3 ">Sign In</h1>
        <Link to={"/auth/register"} className="text-sm ">
          Create account ,{" "}
          <span className="text-blue-500 font-medium hover:underline ">
            Click here to Register
          </span>{" "}<br />
        </Link>
      </div>
      <div className="">
        <CommonFormComponent
          formControls={loginFormControllers}
          formdata={formdata}
          setformData={setformdata}
          onFormSubmit={handleSubmit}
          buttonText={"Log In"}
        // isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default Login