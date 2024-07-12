import React from "react";
// react plugin used to create DropdownMenu for selecting items
// import Select from "react-select";

// reactstrap components
import {
  // Badge,
  // Button,
  Card,
  CardBody,
  CardTitle,
  // FormGroup,
  // Form,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import AboutUsHeader from "components/Headers/AboutMeHeader.js";
import Footer from "components/Footers/Footer.js";
import SmallProjects from "components/Sections/SmallProjects/index.js";

function AboutUs() {
  // const [specialitySelect, setSpecialitySelect] = React.useState(null);
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   console.log("Submitted");
  // };
  return (
    <>
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Brief.</h2>
                    <h4>
                      I'm 19 years old, currently studying a 
                      Bachelor of Computer Science at the University of Wollongong with
                      a major in <u>AI and Big Data.</u>
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons education_hat"></i>
                      </div>
                      <h4 className="info-title">Now</h4>
                      <p className="description">
                      <b>
                        - Capstone project with Sample Assist  <br/>
                        - Graduating July, 2025 <br/>
                        - Reading <a target="blank" href="https://www.goodreads.com/book/show/6705323-you-say-more-than-you-think">You say more than you think</a>
                      </b>
                      </p>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                      </div>
                      <h4 className="info-title">Whats Next</h4>
                      <p className="description">
                      <b>
                        - Finding a mentor in an internship <br/>
                        - Next Book: <a target="blank" href="https://www.goodreads.com/book/show/60715378-designing-machine-learning-systems">Machine Learning Systems - An Iterative Process for Production Ready Applications</a> <br/>
                      </b>
                      </p>
                    </div>
                  </Col>
                  {/* <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success icon-circle">
                        <i className="now-ui-icons emoticons_satisfied"></i>
                      </div>
                      <h4 className="info-title">Hobbies</h4>
                      <p className="description">
                        My hobbies include <b>calisthenics, running, reading and currently trying to learn spanish!</b>
                      </p>
                    </div>
                  </Col> */}
                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">My Projects</h2>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons media-1_camera-compact"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Computer Vision
                      </h4>
                      <p className="description">
                      Automatically recognise a specific sudoku puzzle from the given image and extract relevant information. This is extracted as a 2D array of shape (9,9).
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons business_chart-pie-36"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Sudoku Algorithm</h4>
                      <p className="description">
                      Simple complete backtracking algorithm to always solve the sudoku puzzle by exploring all possible solutions.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="ml-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/sudoku.jpg") + ")"
                    }}
                    onClick={() => window.open("https://github.com/Dean-Overton/sudoku-solver", "_blank")}
                  >
                    <CardBody>
                      <CardTitle tag="h2">Sudoku Solver</CardTitle>
                      <p className="card-description">
                      Numpy, OpenCV, PyTesseract
                      </p>
                      {/* <Badge className="badge-neutral">Analytics</Badge> */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col className="ml-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/TechStackSearch.gif") + ")"
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h2">Tech Stack AI</CardTitle>
                      <p className="card-description">
                      AWS (Lambda, Amplify, DynamoDB, Cognito), React (Typescript), MUI, OpenAI, Python
                      </p>
                      {/* <Badge className="badge-neutral">Analytics</Badge> */}
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons text_align-center"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Tech Stack Generation
                      </h4>
                      <p className="description">
                      This tool helps software architects quickly generate a list of technologies that are suitable 
                      for a given project, based on criteria such as project requirements, 
                      team expertise and budget.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons objects_spaceship"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Report Generation</h4>
                      <p className="description">
                      The next steps for this project would be report generation for stakeholders with detailed information about the architecture 
                      of a system, including its components, dependencies, and interactions.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-team team-4">
            <SmallProjects/>
          </div>
          {/* <div className="about-contact">
            <Container>
              <Row>
                <Col className="mr-auto ml-auto" md="8">
                  <h2 className="text-center title">Want to work with me?</h2>
                  <h4 className="text-center description">
                    I'm always open to discussing product design work, partnership opportunities or other interesting offers.
                  </h4>
                  <Form className="contact-form" onSubmit={onSubmit}>
                    <Row>
                      <Col md="4">
                        <label>First name</label>
                        <InputGroup
                          className={firstFocus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            autoComplete="firstname"
                            placeholder="First Name..."
                            type="text"
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col md="4">
                        <label>Your email</label>
                        <InputGroup
                          className={emailFocus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            autoComplete="email"
                            placeholder="Email Name..."
                            type="text"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label className="control-label">Your role</label>
                          <Select
                            className="react-select react-select-primary"
                            onChange={(value) => setSpecialitySelect(value)}
                            classNamePrefix="react-select"
                            placeholder="Speciality"
                            value={specialitySelect}
                            name=""
                            options={[
                              { value: "1", label: "I'm hiring." },
                              { value: "2", label: "I'm a Designer." },
                              { value: "3", label: "I'm a Developer." },
                              { value: "4", label: "I want a chat." },
                            ]}
                          ></Select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="4">
                        <Button
                          className="btn-round mt-4"
                          color="info"
                          size="lg"
                          type="submit"
                        >
                          Lets Talk
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
