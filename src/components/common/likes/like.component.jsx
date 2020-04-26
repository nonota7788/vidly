import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = (props) => {
  const { onLike, isLiked } = props;

  return (
    <FontAwesomeIcon
      icon={isLiked ? `heart` : ["far", "heart"]}
      onClick={onLike}
    />
  );
};

export default Like;
