import EducationSection from "@/sections/education";
import ExperienceSection from "@/sections/experience";
import IntroSection from "@/sections/intro";
import ProjectsSection from "@/sections/projects";
import StartSection from "@/sections/start";

export default function Home() {
  const screen =
    "flex justify-center items-center w-screen h-full px-0 overflow-x-hidden overflow-y-auto";
  const content =
    "block xl:w-full w-[inherit] xl:max-w-screen-xl space-y-32 px-4 py-32";
  return (
    <div className={screen}>
      <div className={content}>
        <StartSection />
        <IntroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
