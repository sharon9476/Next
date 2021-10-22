import React from "react";
import header from "./Title.module.css";

function Title() {
  const x = 5;
  return (
    <div className={x === 5 ? header.header2 : header.header1}>
      <h2>Sharon</h2>
    </div>
  );
}

export default Title;
