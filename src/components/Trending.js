import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment/moment";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
    ]
  };

  useEffect(() => {
    const fetchTrending = async () => {
        axios
        .get(
          "https://newsapi.org/v2/everything?q=sports&apiKey=597be9e12a5e4330a0967da09fdbdec9&pageSize=15"
        )
        .then((res) => {
          console.log(res);
          setTrending(res?.data?.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTrending();
  }, []);

  return (
    <div className="trending-cards">
    {/* <div className="col-md-12"> */}
    <h3 className="trending-title"><span class="iconify" data-icon="ic:round-star"></span>Trending</h3>
    <Slider {...settings}>
      {trending?.map((item) => (
        item?.urlToImage ?
        <div className="card">
          <img
            className="card-img-top"
            src={item.urlToImage}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title" title={item.title}>{item.title}</h5>
            <p className="card-date">{moment(item.publishedAt).format("MMMM DD, YYYY hh:mm A")}</p> 
            <p className="views-count"><span class="iconify" data-icon="mdi:eye"></span>22432</p>
          </div>
        </div>:null
      ))}
       </Slider>
    </div>
   
  );
};

export default Trending;
