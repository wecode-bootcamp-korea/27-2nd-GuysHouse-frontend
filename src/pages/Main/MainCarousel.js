import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn.naamezip.com/1631864097998.png?w=1600&f=jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://cdn.naamezip.com/1631520704627.png?w=1600&f=jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.naamezip.com/1634896466122.png?w=1600&f=jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
