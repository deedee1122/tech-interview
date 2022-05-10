import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetails from "../components/CardDetails/CardDetails";

const Details = ({ result }) => {
  let params = useParams();
  let selectedCard = result?.find((x) => x.id === +params.id);

  return (
    <div className="container">
      <CardDetails selectedCard={selectedCard} />
    </div>
  );
};

export default Details;
