import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

const News = () => {
  const [data, setData] = useState([
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Kevin Webb",
      "title": "How to watch UFC 288: Bantamweight champ Aljamain Sterling faces Henry Cejudo in the main event",
      "description": "Henry Cejudo returns from retirement to challenge bantamweight champ Aljamain Sterling at UFC 288. US viewers can order the PPV live stream on ESPN+.",
      "url": "https://www.businessinsider.com/guides/streaming/how-to-watch-ufc-288-sterling-vs-cejudo-2023-5",
      "urlToImage": "https://i.insider.com/64553f7fbcb4870018c7f476?width=1200&format=jpeg",
      "publishedAt": "2023-05-06T23:00:08Z",
      "content": "When you buy through our links, Insider may earn an affiliate commission. Learn more.Henry Cejudo retired as a UFC champion in 2020, and returns to challenge for the belt at UFC 288.Photo by Getty Im… [+3872 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Karim Zidan",
      "title": "UFC-backed skateboarding tour leans into right-wing media ties",
      "description": "The execs who steered the UFC from freak show to billion-dollar property are trying the same with a new skateboarding league – by partnering with the go-to streaming site of the rightThe Street League Skateboarding (SLS) Championship Tour made a thrilling ret…",
      "url": "https://www.theguardian.com/sport/blog/2023/may/10/street-league-skateboarding-ufc-rumble-venture",
      "urlToImage": "https://i.guim.co.uk/img/media/d0d690b3af4c6f29ce5b530323e69604ba7fdf33/0_19_4241_2546/master/4241.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=793f2966d7c39fdfef1886600e0f368d",
      "publishedAt": "2023-05-10T08:00:08Z",
      "content": "The Street League Skateboarding (SLS) Championship Tour made a thrilling return last month in Chicago. The event showcased some of the worlds best skateboaders, including Brazilian Olympic silver med… [+5587 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Marc Raimondi",
      "title": "'You have never met anyone like Henry Cejudo': How the King of Cringe plans to become GOAT",
      "description": "Henry Cejudo was a two-division champ when he walked away from the UFC. As he returns three years later at UFC 288, he's back at it once again with even bigger aspirations.",
      "url": "https://www.espn.com/mma/story/_/id/37028263/ufc-288-never-met-anyone-henry-cejudo-how-ufc-cringe-king-plans-become-goat",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0504%2Fufc_strange_departure_and_return_of_henry_cejudo_cr_16x9.jpg",
      "publishedAt": "2023-05-05T12:35:45Z",
      "content": "Henry Cejudo walked on stage wearing a janky crown and a cheap-looking robe. In his hands were a top hat and plastic scepter. Cejudo, like a two-bit magician, produced from the hat in sequence: a plu… [+19204 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Andres Waters",
      "title": "5:21, 232 and 7.5: The numbers behind Jailton Almeida's incredible start in the UFC",
      "description": "Almeida, an undefeated heavyweight quickly rising up the ranks, has impressed in the Octagon and on the stat sheet.",
      "url": "https://www.espn.com/mma/story/_/id/37604170/the-numbers-jailton-almeida-hot-start-ufc",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0511%2Fr1171686_1296x729_16%2D9.jpg",
      "publishedAt": "2023-05-12T13:52:40Z",
      "content": "May 12, 2023, 08:35 AM ET\r\nRising heavyweight contender Jailton Almeida (18-2, 4-0 UFC) is set to make his first UFC Fight Night main event appearance on Saturday night. Almeida, currently unranked i… [+5056 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Brett Okamoto",
      "title": "Ex-UFC champ, top free agent Ngannou joins PFL",
      "description": "Former UFC heavyweight champion Francis Ngannou, one of the biggest free agents in MMA history, has signed an expansive, multi-fight deal with the Professional Fighters League.",
      "url": "https://www.espn.com/mma/story/_/id/37658312/former-ufc-heavyweight-champ-francis-ngannou-signs-professional-fighters-league",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0123%2Fr964933_1296x729_16%2D9.jpg",
      "publishedAt": "2023-05-16T10:35:07Z",
      "content": "Former UFC heavyweight champion Francis Ngannou has signed an expansive, multi-fight deal with the Professional Fighters League, he and the organization jointly announced on Tuesday.\r\nNgannou (17-3) … [+3280 chars]"
    }
  ]);
//   const getData = () => {
//     axios
//       .get(
//         "https://newsapi.org/v2/everything?q=ufc&apiKey=597be9e12a5e4330a0967da09fdbdec9&pageSize=5"
//       )
//       .then((res) => {
//         console.log(res);
//         setData(res?.data?.articles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//   };

//   useEffect(() => {
//     getData();
//   }, []);

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
