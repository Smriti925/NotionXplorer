import React from "react"

const HighlightText = ({ text }) => {
  return (
    <span className="bg-green-5 bg-clip-text font-bold text-transparent">
      {" "}
      {text}
    </span>
  )
}

export default HighlightText
