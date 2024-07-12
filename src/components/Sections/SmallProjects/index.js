import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  // CardFooter,
  CardTitle,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
import Flashcards from "../../../assets/img/Flashcards.png";
import Solana from "../../../assets/img/solana.png";
import Leaf from "../../../assets/img/leaf.png";
const items = [
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={Flashcards}
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            This automatic flashcard generator 2023 would take a pdf file (usually my lectures) and then create an Anki flashcard deck making studying a lot more efficient.
          </h5>
          <CardTitle tag="h4">Python</CardTitle>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={Solana}
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
          Various Python tools 2021 to interact with the Solana Blockchain. 
          </h5>
          <CardTitle tag="h4">Python, Solana CLI</CardTitle>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={Leaf}
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
          Routeshare 2020 was a project to provide a platform for users to carpool rides easily and safely. 
          </h5>
          <CardTitle tag="h4">Android Studio (Kotlin), Firebase Backend (Python)</CardTitle>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  }
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div
        className="section section-testimonials"
        data-background-color="black"
      >
        <Row>
          <h2 className="title ml-auto mr-auto text-center">Other little projects...</h2>
        </Row>
        <Row>
          <Col md="12">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Testimonials;
