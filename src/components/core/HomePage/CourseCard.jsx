import React from "react"
// Importing React Icons
import { HiUsers } from "react-icons/hi"
import { ImTree } from "react-icons/im"

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`h-80 w-[360px] cursor-pointer rounded-lg border border-richblack-500 text-white hover:bg-white hover:text-blue-500 lg:w-96`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="flex h-[80%] flex-col gap-3 border-b-[2px] border-dashed border-richblack-400 p-10">
        <p className="text-lg font-bold">{cardData?.heading}</p>
        <div className="text-richblack-400">{cardData?.description}</div>
      </div>

      <div className={`flex justify-between px-6 py-3 font-medium`}>
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
