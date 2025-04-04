import React from "react";
import { TopCard } from "../topExceutive/TopExcecutive";
import "./Todayfeeds.scss";

interface NewsItem {
    title: string;
    description: string;
    imageUrl: string;
    timeAgo: string;
  }

function TodaysLatesNews() {


const newsData: NewsItem[] = [
    {
      title: "By Currency Analysis",
      description: "By April 2021, China was home to 48% of bitcoin miners, down from 76% in September 2019. A majority of miners had made",
      imageUrl:
        "https://media.gettyimages.com/id/920931664/photo/krypto-currency-mining.jpg?s=612x612&w=gi&k=20&c=BVuyJot7_jlBwgRYykBwnnxm3d83GGP9Qby2O_W_oz8=",
      timeAgo: "2 Hours ago",
    },
    {
      title: "By Currency Analysis",
      description: "By April 2021, China was home to 48% of bitcoin miners, down from 76% in September 2019. A majority of miners had made",
      imageUrl:
        "https://images.unsplash.com/photo-1621504450181-5d356f61d307?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvfGVufDB8fDB8fHww",
      timeAgo: "2 Hours ago",
    },
    {
        title: "By Currency Analysis",
        description: "By April 2021, China was home to 48% of bitcoin miners, down from 76% in September 2019. A majority of miners had made",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFJZmklW6jbmN8SIn6I3-ej_SkSYG2LZ6oHM-cUUsnEyT-uSyVPhvHzruSbNmckwILpA&usqp=CAU",
        timeAgo: "2 Hours ago",
      },
      {
        title: "By Currency Analysis",
        description: "By April 2021, China was home to 48% of bitcoin miners, down from 76% in September 2019. A majority of miners had made",
        imageUrl:
          "https://assets.canarymedia.com/content/uploads/enn/2022-11-pexels-karolina-grabowska-5980889.jpg",
        timeAgo: "2 Hours ago",
      },
  ];
  return (
    <div className="overall">
      <h3 className="headtop">Todays Latest News</h3>
      {newsData.map((news, index) => (
        <div className="latesfeed" key={index}>
          <div className="latesfeedimage"  >
            <img src={news.imageUrl} alt="crypto" className="imagewidth" />
          </div>
          <div className={`card-content-feeds ${index === newsData.length - 1 ? 'last-feed' : ''}`}>
            <h2 className="card-title">{news.title}</h2>
            <p className="card-description">{news.description}</p>
            <span className="card-time">{news.timeAgo}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodaysLatesNews;
