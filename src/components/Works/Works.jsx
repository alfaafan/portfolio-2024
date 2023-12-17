import { experiences } from "../../data/experience";
import ExperienceCard from "../UI/ExperienceCard";

function Works() {
  return (
    <section id="works" className="min-h-screen p-5 lg:px-32 lg:py-12">
      <h1 className="mt-5 text-3xl lg:text-5xl text-center uppercase font-bold mb-5">Works & Experiences</h1>
      {/* <h2 className="my-10 text-2xl lg:text-3xl text-center uppercase font-semibold">Works</h2> */}
      <div>
        <h2 className="my-10 text-2xl lg:text-3xl text-center uppercase font-semibold">Experiences</h2>
        <div className="flex flex-col sm:flex-row gap-5">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} title={experience.title} employmentType={experience.employmentType} company={experience.company} duration={experience.duration} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
