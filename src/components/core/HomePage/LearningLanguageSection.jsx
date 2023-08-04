import React from "react"

import Compare_with_others from "../../../assets/Images/Compare_with_others.svg"
import Know_your_progress from "../../../assets/Images/Know_your_progress.png"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg"
import CTAButton from "../../../components/core/HomePage/Button"
import HighlightText from "./HighlightText"

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col justify-around  bg-white p-5 py-20 text-black ">
      <div>
        <p className="text-center text-4xl font-bold">
          Your swiss knife for
          <HighlightText text={"learning any language"} />
        </p>
        <p className="mx-auto py-5 text-center font-bold text-richblack-300">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center lg:mt-0 lg:flex-row">
          <img
            src={Know_your_progress}
            alt=""
            className="object-contain  lg:-mr-64 "
          />
          <img
            src={Compare_with_others}
            alt=""
            className="-mt-12 object-contain lg:-mb-10 lg:-mt-0"
          />
          <img
            src={Plan_your_lessons}
            alt=""
            className="-mt-16  object-contain lg:-ml-64 lg:-mt-5"
          />
        </div>
      </div>

      <div className="mx-auto  w-fit lg:mb-20">
        <CTAButton active={true} linkto={"/signup"}>
          <div className="">Learn More</div>
        </CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguageSection
