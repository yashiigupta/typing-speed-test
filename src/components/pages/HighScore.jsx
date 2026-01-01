import PageLayout from "../layouts/PageLayout";

import HeaderCompleted from "../ui/HeaderCompleted";
import HighScoreAchieved from "../ui/HighScoreAchieved";

const HighScore = () => {
  return (
    <PageLayout className="flex flex-col items-start lg:w-[1440px] lg:h-[1024px] lg:py-8 lg:px-28 lg:gap-16 md:w-[768px] md:h-[1024px] w-[375px] h-[812px] px-4 pt-4 pb-8 gap-8 md:px-8 md:pt-8 md:pb-16 md:gap-20 bg-[#121212]">
      <HeaderCompleted />
      <HighScoreAchieved />
    </PageLayout>
  )
}

export default HighScore