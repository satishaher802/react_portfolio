import React from "react";
import "./style.scss";
const PageheaderContent = (props) => {
  const { headertext, icon } = props;
  return (
    <div className="wrapper">
      <h2>{headertext}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageheaderContent;
