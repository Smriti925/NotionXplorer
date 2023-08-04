import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex h-screen items-center justify-center bg-brown-800 to-richblack-700 ">
          <div className="rounded-md bg-white p-10">
            <h1 className="text-4xl font-bold">{title}</h1>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
// bg-[#042825]
