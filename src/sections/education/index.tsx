import { EDUCATION } from "@/utils/texts";

export default function EducationSection() {
  const intro = "w-full h-auto";
  const container =
    "flex flex-wrap justify-center items-center p-12 bg-transparent rounded-xl w-full";
  const formation =
    "flex inline-block flex-col p-6 w-full h-max overflow-y-hidden bg-secondary mb-4 rounded-xl";
  return (
    <div className={intro}>
      <div className={container}>
        <h3 className="mr-auto my-4">Educação</h3>
        {EDUCATION.map((ed) => (
          <div className={formation} key={ed.key}>
            <h4 className="text-primary">{ed.name}</h4>
            <h5 className="text-primary">{ed.formation}</h5>
            <h6>{ed.period}</h6>
            <p>{ed.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
