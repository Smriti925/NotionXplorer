import React from "react"

import TimeLineImage from "../../../assets/Images/TimelineImage.png"
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import CTAButton from "./Button"
import HighlightText from "./HighlightText"

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
]

const TimelineSection = () => {
  return (
    <div className="flex flex-col items-center gap-20 py-20 xl:flex-row">
      <div>
        <div className="text-4xl font-semibold ">
          Get the skills you need for a{" "}
          <HighlightText text={"job that is in demand."} />
        </div>
        <div className="py-5 font-bold text-richblack-300 sm:w-4/5">
          The modern NotionXplorer is the dictates its own terms. Today, to be a
          competitive specialist requires more than professional skills.
        </div>
        <CTAButton active={true} linkto={"/signup"}>
          <button>Learn More</button>
        </CTAButton>

        <div className="mt-10 flex flex-col gap-14 lg:w-[45%] lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_0_62px_0] shadow-[#00000012]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">{ele.Heading}</h2>
                    <p className="text-richblack-300">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 w-[26px] border-r border-dotted border-richblack-100 bg-richblack-400/0`}
                ></div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="relative h-fit w-fit shadow-[0px_0px_30px_0px] shadow-blue-200">
        <div className="absolute flex flex-col gap-4 bg-brown-800 py-5 uppercase text-white lg:bottom-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] lg:flex-row lg:gap-0 lg:py-10 ">
          {/* Section 1 */}
          <div className="flex items-center gap-5 border-green-5 px-7 lg:border-r lg:px-14">
            <h1 className="w-[75px] text-3xl font-bold">10</h1>
            <h1 className="w-[75px] text-sm text-green-5">Years experiences</h1>
          </div>

          {/* Section 2 */}
          <div className="flex items-center gap-5 px-7 lg:px-14">
            <h1 className="w-[75px] text-3xl font-bold">250</h1>
            <h1 className="w-[75px] text-sm text-green-5">types of courses</h1>
          </div>
        </div>
        <img
          src={TimeLineImage}
          alt="timelineImage"
          className="h-[400px] object-cover shadow-[20px_20px_0px_0px] shadow-white lg:h-fit"
        />
      </div>
    </div>
  )
}

export default TimelineSection
