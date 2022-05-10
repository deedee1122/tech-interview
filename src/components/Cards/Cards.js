import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";
import cocktails from "../../images/cocktail-icon-background.png";
import beers from "../../images/beer-icon-background.png";
import coffee from "../../images/coffee-icon-background.png";
import milkshake from "../../images/milkshake-icon-background.png";

const Cards = ({
  comments,
  creator,
  guests,
  id,
  location,
  time,
  title,
  type,
}) => {
  let imageType;
  let imageSwitch = () => {
    if (type === "COCKTAILS") return (imageType = cocktails);
    else if (type === "BEERS") return (imageType = beers);
    else if (type === "COFFEES") return (imageType = coffee);
    else if (type === "MILKSHAKES") return (imageType = milkshake);
  };
  imageSwitch();
  return (
    <>
      {/* className ="card" */}
      {/* className ={`${styles.card}`} */}
      <Link
        style={{ textDecoration: "none", color: "#212529" }}
        to={`details/${id}`}
        className={`${styles.card} col-lg-3 col-md-5 `}
      >
        <img src={imageType} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="fw-bold"> Location: </span>
            {location?.name}
          </p>
          <p className="card-text">
            <span className="fw-bold"> Creator: </span>
            {creator?.name}
          </p>
          <a href="#" className="btn btn-dark">
            More Details
          </a>
        </div>
        <span className={`${styles.badge} bg-success`}>{type}</span>
      </Link>
    </>
  );
};

export default Cards;
