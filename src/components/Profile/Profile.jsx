function Profile() {
  return (
    <section id="about" className="min-h-screen w-screen p-5 lg:px-48 lg:py-10">
      <h1 className="font-bold text-3xl lg:text-5xl uppercase text-center mt-5 mb-5 lg:mb-10">About me</h1>
      <div className="about-wrapper lg:flex lg:align-center">
        <img src="/src/assets/hello.svg" alt="Hello" className="max-sm:my-10 mt-5 me-5" width="400px" />
        <div className="about-content">
          <p className="font-extralight mb-3">
            Passionate and results-driven, Enthusiastic and detail-oriented Software Engineer with a passion for solving complex problems through innovative and efficient coding practices. A quick learner with a demonstrated ability to
            rapidly assimilate new technologies and programming languages, fostering a continuous learning mindset.
          </p>
          <p className="font-extralight">
            Eager to contribute technical expertise, collaborate with cross-functional teams, and rapidly adapt to new technologies. Open to challenges and ready to embark on a rewarding career in software engineering.
          </p>
          <div className="about-info mt-8">
            <div className="about-items mb-3">
              <h6 className="font-medium">
                {/* <i className="fa-solid fa-location-dot me-1"></i> */}
                <span>Location:</span>
                <span className="ms-3 font-normal">Indonesia</span>
              </h6>
            </div>
            <div className="about-items mb-3">
              <h6 className="font-medium">
                {/* <i className="fa-solid fa-briefcase me-1"></i> */}
                <span>Freelance:</span>
                <span className="text-gray-600 ms-3 font-normal">Unavailable</span>
              </h6>
            </div>
            <div className="call-to-action mt-10">
              <button className="btn me-3">
                <a href="mailto:yusufa0509@gmail.com">Let&apos;s talk</a>
              </button>
              <button className="btn btn-ghost">
                <a href="https://www.linkedin.com/in/alfaafan-yusufa-achmad-712953174/">Learn more</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
