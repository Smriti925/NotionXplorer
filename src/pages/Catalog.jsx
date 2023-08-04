import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import Course_Card from "../components/core/Catalog/Course_Card"
import Course_Slider from "../components/core/Catalog/Course_Slider"
import { apiConnector } from "../services/apiConnector"
import { categories } from "../services/apis"
import { getCatalogPageData } from "../services/operations/pageAndComponentData"
import Error from "./Error"

function Catalog() {
  const { loading } = useSelector((state) => state.profile)
  const { catalogName } = useParams()
  const [active, setActive] = useState(1)
  const [catalogPageData, setCatalogPageData] = useState(null)
  const [categoryId, setCategoryId] = useState("")

  // Fetch All Categories
  useEffect(() => {
    ;(async () => {
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        const category_id = res?.data?.data?.filter(
          (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
        )[0]._id
        setCategoryId(category_id)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
    })()
  }, [catalogName])
  useEffect(() => {
    if (categoryId) {
      ;(async () => {
        try {
          const res = await getCatalogPageData(categoryId)
          console.log("IDDD===", categoryId)
          console.log("response===", res)
          setCatalogPageData(res)
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [categoryId])

  if (loading || !catalogPageData) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  // if (!loading && !catalogPageData.success) {
  //   return <Error />
  // }

  return (
    <>
      {/* Hero Section */}
      <div className=" box-content bg-green-5 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
          <p className="text-sm text-richblack-700">
            {`Home / Catalog / `}
            <span className="text-richblack-700">
              {catalogPageData?.data?.selectedCategory?.name}
            </span>
          </p>
          <p className="text-3xl font-bold text-black">
            {catalogPageData?.data?.selectedCategory?.name}
          </p>
          <p className="max-w-[870px] text-richblack-700">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="text-4xl font-bold text-white">
          Start exploring {catalogPageData?.data?.selectedCategory?.name}
        </div>
        <div className="my-4 flex border-b border-b-richblack-600 text-sm">
          <p
            className={`px-4 py-2 ${
              active === 1
                ? "border-b border-b-green-5 text-green-5"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(1)}
          >
            Most Populer
          </p>
          <p
            className={`px-4 py-2 ${
              active === 2
                ? "border-b border-b-green-5 text-green-5"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(2)}
          >
            New
          </p>
        </div>
        <div>
          <Course_Slider
            Courses={catalogPageData?.data?.selectedCategory?.courses}
          />
        </div>
      </div>
      {/* Section 2 */}
      <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="text-4xl font-bold text-white">
          Explore a different category{" "}
          {/* {catalogPageData?.data?.differentCategory?.name} */}
        </div>

        <div className="py-8">
          <Course_Slider
            Courses={catalogPageData?.data?.differentCategory?.courses}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="text-4xl font-bold text-white">Frequently Bought</div>
        <div className="py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {catalogPageData?.data?.mostSellingCourses
              ?.slice(2, 9)
              .map((course, i) => (
                <Course_Card
                  course={course}
                  key={i}
                  Height={"h-[200px]"}
                  Width={"w-[400px]"}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog
