import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        style={{
          width: props.inpsty === "true" ? "100%" : "",
        }}
        className="Input"
        type="text"
        {...props}
      />
    </div>
  );
};

export default Input;
