import React from "react";
import "./Cards.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ storedData }) => {
  // console.log(storedData);
  return (
    <div className="cardss">
      {storedData &&
        storedData.map((data) => {
          // console.log(data);
          return (
            <Card className="card" key={data.imdbID}>
              <Card.Img
                style={{ height: "250px" }}
                variant="top"
                src={data.Poster}
              />
              <Card.Body className="card__body">
                <div className="card__body__child">
                  <span>Title</span> : {data.Title}
                </div>
                <div className="card__body__child">
                  <span>Type</span> : {data.Type}
                </div>
                <div className="card__body__child">
                  <span>Year</span> : {data.Year}
                </div>
                <button className="card-button">
                  <Link className="link" to={`/movies/${data.imdbID}`}>Know More</Link>
                </button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default Cards;
