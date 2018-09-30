import React from "react";
import Img from "gatsby-image";

export const Thumbnail = ({ handleThumbClick, item, active }) => {
  const theClass = active ? "gallery-thumb-btn active" : "gallery-thumb-btn";
  return (
    <div className={theClass} onClick={() => handleThumbClick(item.id)}>
      <Img fixed={item.fixed} width="100" alt="" />
    </div>
  );
};

export default Thumbnail;
