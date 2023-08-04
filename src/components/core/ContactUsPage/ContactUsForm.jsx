import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import CountryCode from "../../../data/countrycode.json"
import { apiConnector } from "../../../services/apiConnector"
import { contactusEndpoint } from "../../../services/apis"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true)
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      )
      // console.log("Email Res - ", res)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form
      className="rounded-md border border-richblack-500 p-10"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex flex-col gap-2">
        <div>
          <label htmlFor="firstname">
            <p className="py-2 text-white">First Name</p>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="w-full rounded-full border border-richblack-500 p-3"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-green-5">
              Please enter your name.
            </span>
          )}{" "}
        </div>
        <div>
          <label htmlFor="lastname">
            <p className="py-2 text-white">Last Name</p>
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="w-full rounded-full border border-richblack-500 p-3"
            {...register("lastname")}
          />
        </div>
        <div>
          <label htmlFor="email">
            <p className="py-2 text-white">Email Address</p>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="w-full rounded-full border border-richblack-500 p-3"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="-mt-1 text-[12px] text-green-5">
              Please enter your Email address.
            </span>
          )}
        </div>
        <div className="">
          <label htmlFor="phonenumber">
            <p className="py-2 text-white">Phone Number</p>
          </label>
          <div className="flex gap-2">
            <div className="flex w-[85px] flex-col gap-2">
              <select
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name"
                className="rounded-full border border-richblack-500 p-3 text-black"
                {...register("countrycode", { required: true })}
              >
                {CountryCode.map((ele, i) => {
                  return (
                    <option key={i} value={ele.code}>
                      {ele.code} -{ele.country}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="12345 67890"
                className="w-full rounded-full border border-richblack-500 p-3"
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please enter your Phone Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Phone Number" },
                  minLength: { value: 10, message: "Invalid Phone Number" },
                })}
              />
            </div>
            {errors.phoneNo && (
              <span className="-mt-1 text-[12px] text-green-5">
                {errors.phoneNo.message}
              </span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="message">
            <p className="py-2 text-white">Message</p>
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your message here"
            className="w-full rounded-md border border-richblack-500 p-3"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="-mt-1 text-[12px] text-green-5">
              Please enter your Message.
            </span>
          )}
        </div>
        <div>
          <button
            disabled={loading}
            type="submit"
            className={`rounded-full border border-richblack-500 px-8 py-3 text-lg font-bold text-white
        `}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactUsForm
