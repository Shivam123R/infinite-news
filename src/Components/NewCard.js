import React from "react";

function NewCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="news.png" />
      <div className="details">
        <p className="card-title">{props.title}</p>
        <p className="card-desc">{props.desc}</p>
      </div>
      <div className="know-more">
        <p>
          Posted by : {props.author} on {props.date.slice(0, 10)}
        </p>
        <a href={props.link}>Read More</a>
      </div>
    </div>
  );
}

export default NewCard;
