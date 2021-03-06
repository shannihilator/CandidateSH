import React from "react";

const DuplicatePplBtn = props => {
  return (
    <button
      onClick={props.handleDuplicates}
      className="waves-effect amber accent-4 btn"
      style={{
        display: "inline-block",
        width: "25%",
        marginLeft: "40%",
        marginBottom: "2%"
      }}
    >
      Duplicate People
    </button>
  );
};

export default DuplicatePplBtn;
