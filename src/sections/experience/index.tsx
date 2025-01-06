import { container, item, section } from "@/styles/containers";
import { EXPERIENCE } from "@/utils/texts";

export default function ExperienceSection() {
  return (
    <div className={section} id="experience">
      <div className={`${container} flex-wrap bg-container-2 xl:space-y-8`}>
        <h3 className="mr-auto">Experiência</h3>
        {EXPERIENCE.map((experience) => (
          <div key={experience.id} className={`${item} bg-accent`}>
            <h4>{experience.name}</h4>
            <h5>{experience.role}</h5>
            <h5>{experience.period}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
