import React from "react";

function Hero() {
  return (
    <header id="hero" className="rounded-md grid sm:flex justify-center place-items-center items-center h-screen w-screen px-5">
      <div className="profile text-center lg:grid lg:grid-cols-2">
        <img src="/src/assets/programmer.svg" alt="Software Engineer" width="400px" className="place-self-center rounded-lg max-sm:w-72" />
        <div className="profile-info md:text-left text-2xl">
          <h3 className="md:text-3xl max-sm:mt-3 mb-3 font-thin text-lg">Hello, I&apos;m</h3>
          <h1 className="text-4xl md:text-8xl font-bold mb-3">
            Alfaafan <br />
            Yusufa <br />
            Achmad
          </h1>
          <h3 className="md:text-3xl text-lg font-thin mb-3">Software Engineer | Web Developer</h3>
          <div className="mt-5">
            <button className="btn text-lg me-3">
              <a href="https://www.linkedin.com/in/alfaafan-yusufa-achmad-712953174/">View resume</a>
            </button>
            <button className="btn btn-ghost text-lg">
              <a href="#profile">About me</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
