import React from "react";
import Card from "./card.jsx";

const Loder = ({message}) => {
  return (
    <div className="cardWrapper">
      <Card>
        <p style={{"fontSize":"22px", "display":"flex","justifyContent":"center"}}>
        {message}
        </p>
      </Card>
    </div>
  );
};

export default Loder;
