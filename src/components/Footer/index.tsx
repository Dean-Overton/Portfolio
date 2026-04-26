import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
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
