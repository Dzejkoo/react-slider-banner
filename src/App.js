import React from "react";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lays from './images/Lays_logo.png';
import McDonald from './images/McDonald_logo.png';
import Nutella from './images/nutella_logo.png';

import Slider from "react-slick";

const arrLogo = [Lays, McDonald, Nutella, Lays, McDonald, Nutella]

export default function App() {
  const renderSlides = () =>
    arrLogo.map(num => (
      <div className="container">
        <img src={num} />
      </div>
    ));

  return (
    <div className="App">
      <Slider
        dots={false}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}