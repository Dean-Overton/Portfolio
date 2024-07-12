/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://deanoverton.com"
                  target="_blank"
                >
                  Dean Overton
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Created by{" "}
            <a
              href="https://deanoverton.com"
              target="_blank"
            >
              Dean Overton 
            </a> {""}
            with Now UI Kit and ReactJs.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
