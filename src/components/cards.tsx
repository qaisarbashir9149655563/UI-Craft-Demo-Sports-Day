import React from "react";
import "./card.css";

interface CardProps {
  key: number;
  title: String;
  catagory: String;
  date: String;
  classname: String;
  onSelectEvent: () => void;
}
const Cards = ({
  title,
  catagory,
  date,
  classname,
  onSelectEvent,
}: CardProps) => {
  return (
    <div className="cards-container">
      <div className="heading">
        <h1>S</h1>
      </div>
      <div className="vertical-line"></div>
      <div className="event-card">
        <h3>{title}</h3>
        <p>{catagory}</p>
        <p>{date}</p>
        <button className={`card-${classname}`} onClick={onSelectEvent}>
          {classname === "remove-button" ? "Remove" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
