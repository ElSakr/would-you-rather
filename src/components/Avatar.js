import React from "react";
import Image from "react-bootstrap/Image";

const Avatar = ({ avatarURL, className }) => {
  return (
    <Image
      src={avatarURL}
      roundedCircle
      fluid
      width="40"
      height="40"
      className={className}
      alt="user avatar"
    />
  );
}

export default Avatar;
