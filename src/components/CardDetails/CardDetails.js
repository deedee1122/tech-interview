import React from "react";
import cocktails from "../../images/cocktail-icon-background.png";
import beers from "../../images/beer-icon-background.png";
import coffee from "../../images/coffee-icon-background.png";
import milkshake from "../../images/milkshake-icon-background.png";
import Comments from "../Comments/Comments";

const CardDetails = ({ selectedCard }) => {
  let { comments, creator, guests, id, location, time, title, type } =
    selectedCard || [];
  let imageType;
  let imageSwitch = () => {
    if (type === "COCKTAILS") return (imageType = cocktails);
    else if (type === "BEERS") return (imageType = beers);
    else if (type === "COFFEES") return (imageType = coffee);
    else if (type === "MILKSHAKES") return (imageType = milkshake);
  };
  imageSwitch();
  console.log(selectedCard);
  return (
    <>
      <div className="row justify-content-center my-4">
        <div className="col-lg-3 col-12">
          <img className="img-fluid" src={imageType} alt="" />
        </div>
        <div className="col-lg-3 col-12">
          Name: {title}
          <br />
          Category: {type}
          <br />
          location: {location?.name}
          <br />
          <a
            target="_blank"
            href={`https://www.latlong.net/c/?lat=${location?.latitude}&long=${location?.longitude}`}
          >
            <button className="btn btn-dark mt-2">Search Location</button>
          </a>
          <h5 className="mt-4">Creator : {creator?.name}</h5>
          <img
            width={75}
            src={creator?.avatarUrl}
            alt=""
            style={{ borderRadius: "100%" }}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12 mt-4">
          <h4 className="text-center">Comments</h4>
          {comments?.map((x, y) => {
            return <Comments key={y} {...x} />;
          })}
          {comments?.length === 0 ? (
            <div className="text-center">No data to show</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CardDetails;
