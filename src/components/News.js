import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

const News = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=ufc&apiKey=597be9e12a5e4330a0967da09fdbdec9&pageSize=5"
      )
      .then((res) => {
        console.log(res);
        setData(res?.data?.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="posts-container">
      {data.map((post) => {
        return (
          <>
            <div className="post row">
              <div className=" col-md-6 post-info">
                <h4 className="post-title">{post.title}</h4>
                <p className="post-desc">{post.description}</p>
              </div>
              <div className="col-md-6 post-img-container">
                <img
                  className="post-img"
                  src={post.urlToImage}
                  alt="news-image"
                />
                <div className="post-img-footer">
                  <p className="post-date">
                    Published{" "}
                    {moment(post.publishedAt).format("MM/DD/YYYY, hh:mm A")}
                  </p>
                  <p className="author-txt">
                    By <span className="author-name">{post.author}</span>
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default News;
