import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`w-fit rounded-full px-8 py-3 font-bold text-lg${
          active
            ? "rounded-full border border-green-5 text-green-5"
            : "rounded-full border border-richblack-300 text-richblack-300"
        } transition-all duration-100 hover:scale-95`}
      >
        {children}
      </div>
    </Link>
  )
}

export default Button
