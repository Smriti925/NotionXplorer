import React, { useState } from "react"

import { HomePageExplore } from "../../../data/homepage-explore"
import CourseCard from "./CourseCard"
import HighlightText from "./HighlightText"

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
]

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0])
  const [courses, setCourses] = useState(HomePageExplore[0].courses)
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  )

  const setMyCards = (value) => {
    setCurrentTab(value)
    const result = HomePageExplore.filter((course) => course.tag === value)
    setCourses(result[0].courses)
    setCurrentCard(result[0].courses[0].heading)
  }

  return (
    <div className="jutsify-center flex items-center justify-around gap-10 border-y-[1px] border-richblack-500 py-10 lg:h-screen">
      {/* Explore more section */}
      <div className="flex flex-col items-center gap-16">
        <div className="text-center text-4xl font-semibold">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className="mt-5 text-center text-lg font-semibold text-richblack-300">
            Learn to Build Anything You Can Imagine
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center">
          <div className="w-fit rounded-full border-[1px] border-green-5 p-1 text-sm sm:text-base md:font-bold">
            {tabsName.map((ele, index) => {
              return (
                <button
                  className={`${
                    currentTab === ele
                      ? "rounded-full bg-green-5 text-black "
                      : "rounded-full text-white"
                  } p-1 md:px-8 md:py-3`}
                  key={index}
                  onClick={() => setMyCards(ele)}
                >
                  {ele}
                </button>
              )
            })}
          </div>
        </div>

        {/* Cards Group */}
        <div className="flex flex-col gap-5 lg:flex-row xl:gap-10">
          {courses.map((ele, index) => {
            return (
              <CourseCard
                key={index}
                cardData={ele}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExploreMore
