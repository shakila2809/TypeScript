import React from "react";
import "./Card.scss";
import { TopCard } from "./topExceutive/TopExcecutive";
import TodaysLatesNews from "./todayLatestNew/TodaysLatesNews";

// interface CardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   timeAgo: string;
// }

export const Card: React.FC = () => {
  return (
    <div className="card">
        <div className="topcon">
        <span>
            <h2>David Marcus, The Latest Top Executive To Leave Meta</h2>
            <TopCard
        title="David Marcus, The Latest Top Executive To Leave Meta"
        description="Catch up on the latest crypto market news at The Currency Analytics..."
        imageUrl="https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg"
        // imageUrl="https://images.theconversation.com/files/612000/original/file-20240807-17-almvkh.jpg?ixlib=rb-4.1.0&rect=52%2C530%2C5804%2C2902&q=45&auto=format&w=1356&h=668&fit=crop"
        timeAgo="2 hours ago"
        imageclass='card-image-1'
        mianclass=''
         />
        </span>
        
         <TodaysLatesNews
        
         />

        </div>
        <TopCard
        title="David Marcus, The Latest Top Executive To Leave Meta"
        description="David Marcus, The Latest Top Executive To Leave Meta/ Facebook's Crypto Project
        Catch up on the latest crypto market news at The Currency Analytics, CNBC Report summarized the following: David Marcus, the head of Facebook parent company Meta's cryptocurrency efforts, announced on Tuesday he"
        imageUrl="https://media.gettyimages.com/id/1155899824/photo/david-marcus-head-of-calibra-at-facebook-testifies-about-facebooks-proposed-digital-currency.jpg?s=612x612&w=gi&k=20&c=MvyRDB1unfR_3jcbfPlKyoHba97CDZ11f8HLSK-iqPo="
        // timeAgo="2 hours ago"
        imageclass='card-image'
        mianclass='card-main'
        subtitle='By Cripto Potato'
        datetime='2 Thursday 2021'
         />

<TopCard
        title="David Marcus, The Latest Top Executive To Leave Meta"
        description="David Marcus, The Latest Top Executive To Leave Meta/ Facebook's Crypto Project
        Catch up on the latest crypto market news at The Currency Analytics, CNBC Report summarized the following: David Marcus, the head of Facebook parent company Meta's cryptocurrency efforts, announced on Tuesday he"
        imageUrl="https://www.thenation.com/wp-content/uploads/2016/09/David_Marcus_bw-680x430.jpg"
        imageclass='card-image'
        mianclass='card-main'
        subtitle='By crypto Potato'
        datetime='2 Thursday 2021'
         />
       

     
    </div>
  );
};
