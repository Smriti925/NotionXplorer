import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

import HeroVideo from "../../../assets/Images/HeroVideo.mp4"
import WorkspaceImg from "../../../assets/Images/Workspace.webp"
import CTAButton from "./Button"
import CodeBlocks from "./CodeBlocks"
import HighlightText from "./HighlightText"

function Hero() {
  return (
    <div>
      <div className="grid gap-5 p-5 pt-1 md:grid-cols-4 md:grid-rows-3">
        <div className="col-span-2 flex flex-col justify-between md:col-span-2 md:row-span-3 lg:p-20">
          <div className="mt-20">
            <div className="text-4xl font-semibold md:text-6xl">
              Empower Your Future with
              <HighlightText text={"Coding Skills"} />
            </div>
            <p className="py-10 text-richblack-200">
              Elevate your coding prowess through our virtual courses - learn on
              your terms, tackle real-life projects, get evaluated, and receive
              tailored feedback from our experienced teachers.
            </p>

            <div className="mb-5 flex flex-row gap-8">
              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>

          <Link to={"/signup"}>
            <div className="flex items-center gap-2 text-white">
              <p className="text-md">Become an Instructor</p>
              <FaArrowRight />
            </div>
          </Link>
        </div>
        <div className="col-span-2 row-span-3  md:row-span-2">
          <div className="h-[62vh] w-full">
            <video
              className="h-full w-full rounded-3xl object-cover"
              muted
              loop
              autoPlay
            >
              <source src={HeroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="h-[30vh] w-full">
          <img
            src={WorkspaceImg}
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-around rounded-3xl bg-green-5 p-5">
          <div className="text-center text-2xl text-brown-800 [word-spacing:7px]">
            Unlock the Doors to Infinite Knowledge!
          </div>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
      </div>

      <div className="mx-auto w-5/6">
        <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock your
              <HighlightText text={"coding potential"} /> with our online
              courses.
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{
            btnText: "Try it Yourself",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeColor={"text-green-5"}
          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          backgroundGradient={<div className="codeblock1 absolute"></div>}
        />
      </div>
    </div>
  )
}

export default Hero
