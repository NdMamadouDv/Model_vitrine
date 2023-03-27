import React, { useState } from "react";

function ReadMoreReadLess({ limit, children }) {
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };
  return (
    <>
      {isReadMoreShown
        ? children
        : children.toString().substr(0, limit) + "... "}
      <button className=" underline text-xs" onClick={toggleBtn}>
        {isReadMoreShown ? " Réduire" : " En savoir plus"}
      </button>
    </>
  );
}

export default ReadMoreReadLess;
