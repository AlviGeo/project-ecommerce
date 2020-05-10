import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="row m-2">
        <div className="col-md-6 col-sm-12">
          <Slider {...settings}>
            <img src={require("./img/1.png")} alt="Gambar 1" />
            <img src={require("./img/2.png")} alt="Gambar 2" />
            <img src={require("./img/3.png")} alt="Gambar 3" />
          </Slider>
        </div>
        <div className="col-md-6 col-sm-12 d-flex flex-column">
          <img
            src={require("./img/2.png")}
            alt="Gambar"
            style={{ height: "23%", width: "100%", marginBottom: "5%" }}
          />
          <img
            src={require("./img/3.png")}
            alt="Gambar"
            style={{ height: "20%", width: "100%", marginBottom: "5%" }}
          />
        </div>
      </div>
    );
  }
}