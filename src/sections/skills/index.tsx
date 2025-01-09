import { section, shadows } from "@/styles/containers";
import { SKILLS } from "@/utils/texts";

export default function SkillsSection() {
  const grid =
    "grid w-full items-center justify-between grid-cols-[repeat(auto-fill,100px)] sm:grid-cols-[repeat(auto-fill,170px)] md:grid-cols-[repeat(auto-fill,210px)] gap-x-8";
  return (
    <section className={section} tabIndex={0} id="skills">
      <article className="bg-transparent w-full justify-start">
        <h3 className="w-full mb-8">Principais competências</h3>
        <div className={grid}>
          {SKILLS.map((skill) => (
            <div
              className={`${shadows} w-[100px] sm:w-[170px] md:w-[210px] mb-8 p-4 flex flex-col items-center`}
              key={skill.className}
            >
              <i className={`${skill.className} text-3xl sm:text-6xl mb-4`}></i>
              <p className="font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
