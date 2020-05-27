import React from "react";


// reactstrap components
import {
  Card,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const items = [
  {
    src: require(`../assets/img/FyD.jpeg`),
    altText: "Titulo que lleva la noticia",
    caption: "Web realizada para brindarte una opción de compartir las experiencias de llevar clases con los docentes de la UNAH "
  },
  {
    src: require(`../assets/img/B2.jpeg`),
    altText: "Titulo que lleva la noticia",
    caption: "Resumen de la noticia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint soluta cum necessitatibus rerum quidem?"
  },
  {
    src: require(`../assets/img/1847.jpeg`),
    altText: "Titulo que lleva la noticia",
    caption: "Resumen de la noticia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint soluta cum necessitatibus rerum quidem?"
  }
];

const SectionCarousel: React.FC = () => {
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
  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section p-0" id="carousel">

        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <Card className="page-carousel pt-0">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />

                {items.map((item, Index) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText}
                        width="1200"
                        height="450" />
                      <CarouselCaption 
                        captionText={item.caption}
                        captionHeader=""

                      />
                    </CarouselItem>
                  );
                })}
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </a>
              </Carousel>
            </Card>
          </Col>
        </Row>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
