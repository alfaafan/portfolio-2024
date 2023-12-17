import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { RxLinkedinLogo } from "react-icons/rx";

function Footer() {
  return (
    <footer className="footer p-10 bg-base-300 text-neutral-content">
      <aside>
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.87)">
          <path d="M2 21 L12 3 L22 21 L20 23 L12 9 L4 23 Z" />
        </svg>

        <p>
          Copyright © 2023 - All right reserved by Alfaafan Yusufa Achmad
          <br />
          Providing reliable tech since 2023
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a className="hover:text-white" href="https://github.com/alfaafan" target="_blank" rel="noreferrer">
            <VscGithubInverted style={{ fontSize: "x-large" }} />
          </a>
          <a className="hover:text-white" href="https://twitter.com/alfaafan_" target="_blank" rel="noreferrer">
            <VscTwitter style={{ fontSize: "x-large" }} />
          </a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/alfaafan/" target="_blank" rel="noreferrer">
            <RxLinkedinLogo style={{ fontSize: "x-large" }} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
