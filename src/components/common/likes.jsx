import React from "react";

const Likes = () => {
  let classes = " fa fa-heart";
  if (!this.props.liked) classes += "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={() => this.props.onLike()}
      aria-hidden="true"
    ></i>
  );
};

export default Likes;
