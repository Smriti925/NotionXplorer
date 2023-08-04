import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsArrowUp, BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropdown"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`h-14 ${
        location.pathname !== "/" ? "bg-brown-800" : ""
      }  pt-2 transition-all duration-200`}
    >
      {/* button toggle */}
      <div className="flex items-center justify-between border-b border-richblack-700 pb-2 pl-5 sm:border-none lg:pl-24 ">
        <button
          className="scroll-smooth md:hidden"
          onClick={() => {
            setIsOpen(!isOpen)
            console.log(isOpen)
          }}
        >
          {isOpen ? (
            <BsArrowUp
              fontSize={24}
              fill="#AFB2BF"
              className="animate-bounce"
            />
          ) : (
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          )}
        </button>

        {/* navbar */}
        <nav className={`md:flex ${isOpen ? "" : "hidden"}`}>
          <ul className="gap-x-6 text-white sm:flex">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-green-5"
                          : "text-white"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-white p-2 text-black opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-white"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks && subLinks.length ? (
                          <>
                            {subLinks?.map((subLink, i) => (
                              <a
                                href={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-green-5"
                                key={i}
                              >
                                {subLink.name}
                              </a>
                            ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-green-5"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / Signup / Dashboard */}
        <div className="flex items-center gap-x-4 pr-5 ">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-green-5">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-full border border-green-5 px-4 py-2 text-white">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-full border border-green-5 px-4 py-2 text-white">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
