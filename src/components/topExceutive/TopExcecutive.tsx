import React from "react";
import "../Card.scss";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  timeAgo?: string;
  imageclass: string;
  mianclass?: string;
  subtitle?: string;
  datetime?: string;
}

export const TopCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  timeAgo,
  imageclass,
  mianclass,
  subtitle,
  datetime,
}) => {
  return (
    <div className={mianclass}>
      <img src={imageUrl} alt={title} className={imageclass} />
      <div className="card-content">
        <p className="card-title">{subtitle}</p>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {timeAgo ? <span className="card-time">{timeAgo}</span> : <></>}
        <div className="redmore">Read More</div>
      </div>
      <div className="datetime">
        {datetime ? <span className="card-time-color">{datetime}</span> : <></>}
      </div>
    </div>
  );
};
