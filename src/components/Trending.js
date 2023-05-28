import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment/moment";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([
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
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Brett Okamoto",
      "title": "Song punishes Simon in one-sided TKO victory",
      "description": "Song Yadong capped off a brilliant performance by finishing Ricky Simon in the fifth round Saturday night, then called out top bantamweight contenders Sean O'Malley and Marlon Vera.",
      "url": "https://www.espn.com/mma/story/_/id/36324371/song-yadong-stops-ricky-simon-5th-round-ufc-main-event",
      "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0430%2Fr1166346_1296x729_16%2D9.jpg",
      "publishedAt": "2023-04-30T03:08:15Z",
      "content": "Saturday's UFC Fight Night main event in Las Vegas was supposed to be a competitive bout between two bantamweight prospects. It turned into a one-sided showcase fight for Song Yadong.\r\nYadong defeate… [+2003 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Marc Raimondi",
      "title": "UFC's Jones says he may retire after Miocic clash",
      "description": "UFC heavyweight champion Jon Jones says he is seriously considering retiring after he defends his title against Stipe Miocic, a bout being targeted for November in New York City.",
      "url": "https://www.espn.com/mma/story/_/id/37299876/jon-jones-retire-ufc-title-bout-vs-stipe-miocic",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0305%2Fr1139780_1296x729_16%2D9.jpg",
      "publishedAt": "2023-05-03T13:53:09Z",
      "content": "Jon Jones' days in MMA might be numbered.\r\nThe all-time great told Fox Sports Australia in an interview published Tuesday that his plan is to defend the UFC heavyweight title against former champion … [+2340 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Brett Okamoto and Jeff Wagenheim",
      "title": "Identifying the best upcoming MMA fights, heavyweights and 'Ruthless' moments",
      "description": "With newly booked fights on the calendar and the return of Francis Ngannou, we look ahead to what intrigues us most in MMA.",
      "url": "https://www.espn.com/mma/story/_/id/37680007/mma-questions-identifying-best-heavyweights-upcoming-fights-ruthless-robbie-lawler-moments",
      "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0518%2Fr1174981_1296x729_16%2D9.jpg",
      "publishedAt": "2023-05-19T13:52:53Z",
      "content": "May 19, 2023, 09:27 AM ET\r\nIt's been a massive week of breaking news in mixed martial arts, as the last five days have included the end of Francis Ngannou's free agency and the return of the UFC's no… [+8823 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Marc Raimondi",
      "title": "The welterweight title race just got more complicated after UFC 288",
      "description": "Leon Edwards looks likely to fight Colby Covington, but after UFC 288, there are a number of contenders waiting for their shot.",
      "url": "https://www.espn.com/mma/story/_/id/37552586/edwards-covington-muhammad-top-dogs-welterweight-how-rest-2023-play-out",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0507%2Fr1169994_1296x729_16%2D9.jpg",
      "publishedAt": "2023-05-08T13:41:37Z",
      "content": "NEWARK, N.J. -- Belal Muhammad doesn't have to tell people to \"Remember the name,\" any longer. He's now the bona fide top contender for the UFC welterweight title after beating Gilbert Burns via unan… [+7748 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Brett Okamoto",
      "title": "Adesanya: Title-winning KO made with torn MCL",
      "description": "Israel Adesanya says he suffered a Grade 1 MCL tear the week before his unforgettable knockout over Alex Pereira at UFC 287, discussing the injury on his YouTube channel.",
      "url": "https://www.espn.com/mma/story/_/id/36303736/israel-adesanya-says-won-ufc-title-fighting-torn-mcl",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0409%2Fr1156721_2_1296x729_16%2D9.jpg",
      "publishedAt": "2023-04-27T15:23:27Z",
      "content": "Israel Adesanya says he suffered a Grade 1 MCL tear the week before his unforgettable knockout of Alex Pereira at UFC 287 earlier this month in Miami.\r\nAdesanya (24-2) revealed the injury via his You… [+1672 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Brett Okamoto",
      "title": "UFC 288: Why Burns and Muhammad are taking the biggest fight of their careers on short notice",
      "description": "Burns and Muhammad will be meeting on two weeks' notice, with the winner putting himself in position for the next shot at the UFC welterweight title.",
      "url": "https://www.espn.com/mma/story/_/id/36288976/why-gilbert-burns-belal-muhammad-taking-biggest-fight-their-careers-short-notice",
      "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0426%2Fr1164721_1296x729_16%2D9.jpg",
      "publishedAt": "2023-04-28T12:27:05Z",
      "content": "Gilbert Burns sat at the podium of the UFC 287 postfight press conference on April 8 and issued the UFC an ultimatum: Book him a title fight next or just release him from his contract.\r\n\"I'm not aski… [+5963 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Brett Okamoto, Jeff Wagenheim",
      "title": "What we know and don't know about Francis Ngannou's signing with the PFL",
      "description": "Now that Ngannou is officially the newest member of PFL, we look at how the deal happened and what's next for the heavyweight star.",
      "url": "https://www.espn.com/mma/story/_/id/37661277/everything-know-francis-ngannou-signing-pfl",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0516%2Fr1173809_1296x729_16%2D9.jpg",
      "publishedAt": "2023-05-16T23:21:18Z",
      "content": "May 16, 2023, 07:02 PM ET\r\nThe PFL has made it a mission to persuade the MMA public that it is the No. 2 fight promotion in the sport, behind only the mighty UFC. That effort has received pushback, t… [+6466 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Brett Okamoto, Marc Raimondi",
      "title": "UFC 288 takeaways: No more discounting Aljamain Sterling",
      "description": "At UFC 288, Sterling shined bright in an impressive win over Henry Cejudo, while two fighters earned title shots later this year.",
      "url": "https://www.espn.com/mma/story/_/id/37532609/ufc-288-takeaways-no-more-discounting-aljamain-sterling-belal-muhammad-cannot-overlooked-anymore",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0507%2Fr1169586_1296x729_16%2D9.jpg",
      "publishedAt": "2023-05-07T06:20:11Z",
      "content": "Brett Okamoto and Marc Raimondi react to the biggest moments at UFC 288 and offer thoughts on what might be ahead for the standouts in Newark.It really is just time to appreciate Aljamain Sterling.It… [+6586 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Marc Raimondi",
      "title": "Masvidal's father facing attempted murder charge",
      "description": "The father of retired UFC star Jorge Masvidal is facing a charge of second-degree attempted murder after a shooting at the fighter's Miami home, according to an arrest affidavit.",
      "url": "https://www.espn.com/mma/story/_/id/37481923/jorge-masvidal-father-facing-attempted-murder-charge",
      "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0422%2Fr844050_1296x729_16%2D9.jpg",
      "publishedAt": "2023-05-05T19:55:32Z",
      "content": "Jorge Masvidal Fernandez, the father of recently retired UFC star Jorge Masvidal, was arrested Thursday on a charge of second-degree attempted murder with a deadly weapon after a shooting inside the … [+810 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Associated Press",
      "title": "Former UFC champion Francis Ngannou signs with PFL after contentious split",
      "description": "<ul><li>Former UFC heavyweight champion strikes deal with PFL</li><li>Ngannou was top free agent after leaving UFC over contract</li></ul>Francis Ngannou’s reign as one of the top heavyweights in MMA will continue in the Professional Fighters League following…",
      "url": "https://www.theguardian.com/sport/2023/may/16/francis-ngannou-signs-pfl-former-ufc-champion",
      "urlToImage": "https://i.guim.co.uk/img/media/186ba15b18d4bbcee051d2201b1f98f0db371c56/0_0_4071_2443/master/4071.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d533f713620d251205bbf5057c16b064",
      "publishedAt": "2023-05-16T12:32:59Z",
      "content": "Francis Ngannous reign as one of the top heavyweights in MMA will continue in the Professional Fighters League following the former champions contentious split with the UFC.\r\nNgannou was still UFC he… [+3551 chars]"
    }
  ]);
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
    // const fetchTrending = async () => {
    //     axios
    //     .get(
    //       "https://newsapi.org/v2/everything?q=sports&apiKey=597be9e12a5e4330a0967da09fdbdec9&pageSize=15"
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       setTrending(res?.data?.articles);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // fetchTrending();
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
