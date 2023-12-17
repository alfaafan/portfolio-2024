/* eslint-disable react/prop-types */
function ExperienceCard({ title, employmentType, company, duration }) {
  return (
    <div className="bg-base-300 shadow-xl self-center flex flex-col justify-center items-center text-center w-full h-48 p-5">
      <h2 className="card-title self-center font-bold text-sm mb-3">{title}</h2>
      <div>
        <p className="text-sm">
          {employmentType} - {company}
        </p>
        <p className="font-thin text-gray-400">{duration}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
