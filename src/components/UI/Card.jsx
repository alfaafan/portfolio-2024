/* eslint-disable react/prop-types */
function Card({ title, img }) {
  return (
    <div className="bg-base-300 w-72 lg:w-56 h-24 shadow-xl self-center flex flex-row-reverse items-center text-center justify-center">
      <div className="p-8">
        <h2 className="card-title self-center uppercase">{title}</h2>
      </div>
      <figure>
        <img src={img} alt={title} className="w-24 m-5 p-5" />
      </figure>
    </div>
  );
}

export default Card;
