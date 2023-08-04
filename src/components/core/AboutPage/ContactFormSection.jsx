import React from "react"

import ContactUsForm from "../ContactUsPage/ContactUsForm"

const ContactFormSection = () => {
  return (
    <div className="mx-auto lg:w-1/2">
      <h1 className="mt-20 text-center text-4xl font-bold text-white">
        Get in Touch
      </h1>
      <p className="mt-3 text-center text-richblack-300">
        We&apos;d love to here form you, Please fill out this form.
      </p>
      <div className="mx-auto mt-12">
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactFormSection
