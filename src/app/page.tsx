import EducationSection from "@/sections/education";
import ExperienceSection from "@/sections/experience";
import IntroSection from "@/sections/intro";
import ProjectsSection from "@/sections/projects";
import SkillsSection from "@/sections/skills";
import StartSection from "@/sections/start";

export default function Home() {
  const screen =
    "flex justify-center items-center w-[99vw] h-full px-0 overflow-x-hidden overflow-y-auto";
  const content =
    "block xl:w-full w-[inherit] xl:max-w-screen-xl space-y-32 px-6 py-32";
  return (
    <div className={screen}>
      <div className={content}>
        <StartSection />
        <IntroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </div>
  );
}
