import React from "react";

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <button onClick={() => setSelectedOption("Option 2")}>
      Select Option 2
    </button>
  );
};

export default ChildComponent2;
