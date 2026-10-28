import React from "react";
import { Link } from "react-router-dom";
import { socials } from "@/data/socials";

const linkClass =
  "text-sm text-foreground/70 hover:text-foreground transition-colors";

const Footer: React.FC = () => {
  return (
    <footer>
      <nav
        aria-label="Footer"
        className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-foreground/10 pt-6 pb-4"
      >
        <Link to="/" className={linkClass}>
          Home
        </Link>
        <Link to="/projects" className={linkClass}>
          Projects
        </Link>
        <Link to="/contact" className={linkClass}>
          Contact
        </Link>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          CV
        </a>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {social.name}
          </a>
        ))}
      </nav>
      <div className="container mx-auto text-center pb-4">
        <p>
          &copy; {new Date().getFullYear()} Dean Overton. All rights reserved.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-500 hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            className="text-blue-500 hover:underline"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
