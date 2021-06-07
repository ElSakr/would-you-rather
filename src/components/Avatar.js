import React from "react";
import Image from "react-bootstrap/Image";

const AvatarPlaceholder = ({ avatarURL, className }) => {
  return (
    <Image
      src={avatarURL}
      roundedCircle
      fluid
      width="35"
      height="35"
      className={className}
      alt="user avatar"
    />
  );
}

export default AvatarPlaceholder;
