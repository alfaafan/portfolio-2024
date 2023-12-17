import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Profile from "./components/Profile/Profile";
import Stacks from "./components/Stacks/Stacks";
import Works from "./components/Works/Works";

function App() {
  useEffect(() => {
    const links = document.querySelectorAll("a[id]");

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      <Hero />
      <Profile />
      <Stacks />
      <Works />
    </>
  );
}

export default App;
