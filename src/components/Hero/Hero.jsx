import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Hero() {
  return (
    <header id="hero" className="rounded-md grid sm:flex justify-center place-items-center items-center h-screen w-screen px-5">
      <div className="profile text-center lg:grid lg:grid-cols-2">
        <img src="/programmer.svg" alt="Software Engineer" width="400px" className="place-self-center rounded-lg max-sm:w-72" />
        <div className="profile-info md:text-left text-2xl">
          <h3 className="md:text-2xl max-sm:mt-3 mb-3 font-mono text-sm">Hello, I&apos;m</h3>
          <h1 className="text-4xl md:text-8xl font-bold mb-3">
            Alfaafan <br />
            Yusufa <br />
            Achmad
          </h1>
          <h3 className="md:text-3xl text-lg font-thin mb-3">Software Engineer | Web Developer</h3>
          <div className="mt-5">
            <button className="btn text-lg me-3">
              <FaCloudDownloadAlt />
              <a href="https://drive.google.com/file/d/1S0809n-n1Lg1wepQaDxyRQEpfjdIFGcL/view?usp=sharing" target="_blank" rel="noreferrer">
                View resume
              </a>
            </button>
            <button className="btn btn-ghost text-lg">
              <IoPersonCircleOutline />
              <a href="#profile">About me</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
