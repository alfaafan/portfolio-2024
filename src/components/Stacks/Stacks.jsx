import Card from "../UI/Card";
import { backend, frontend, languages, others } from "../../data/techStacks";

function Stacks() {
  return (
    <section id="stacks" className="min-h-screen p-5 lg:px-32 lg:py-12">
      <h1 className="mt-5 text-3xl lg:text-5xl text-center uppercase font-bold mb-5">Stacks</h1>
      <div className="py-5">
        <h2 className="my-10 text-2xl lg:text-3xl text-center uppercase font-semibold">Languages</h2>
        <div className="flex flex-col justify-center content-center sm:flex-row gap-10">
          {languages.map((language) => (
            <Card key={language.title} title={language.title} img={language.img} />
          ))}
        </div>
      </div>
      <div className="py-5">
        <h2 className="my-10 text-2xl lg:text-3xl text-center uppercase font-semibold">Frontend Tools & Frameworks</h2>
        <div className="flex flex-col justify-center content-center sm:flex-row gap-10">
          {frontend.map((stack) => (
            <Card key={stack.title} title={stack.title} img={stack.img} />
          ))}
        </div>
      </div>
      <div className="py-5">
        <h2 className="my-10 text-2xl lg:text-3xl text-center uppercase font-semibold">Backend Tools & Frameworks</h2>
        <div className="flex flex-col justify-center content-center sm:flex-row gap-10">
          {backend.map((stack) => (
            <Card key={stack.title} title={stack.title} img={stack.img} />
          ))}
        </div>
      </div>
      <div className="py-5">
        <h2 className="my-10 text-2xl lg:text-3xl text-center uppercase font-semibold">Other Tools</h2>
        <div className="flex flex-col justify-center content-center sm:flex-row gap-10">
          {others.map((stack) => (
            <Card key={stack.title} title={stack.title} img={stack.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stacks;
