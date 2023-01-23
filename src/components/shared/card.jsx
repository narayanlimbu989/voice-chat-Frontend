import React from "react";

const card = ({ title, children }) => {
  return (
    <div className="card">
      <h1 className="heading">{title}</h1>
      {children}
    </div>
  );
};

export default card;
