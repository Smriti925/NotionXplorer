// Component Imports

import ReviewSlider from "../components/Common/ReviewSlider"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import Hero from "../components/core/HomePage/Hero"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div className="flex flex-col gap-20 text-white sm:p-0">
      <Hero />
      <div className="mx-auto w-5/6">
        <ExploreMore />
        <TimelineSection />
      </div>

      <LearningLanguageSection />

      <div className="mx-auto mb-20 w-5/6">
        <InstructorSection />
        <ReviewSlider />
      </div>
    </div>
  )
}

export default Home
