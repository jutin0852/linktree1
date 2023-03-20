import React from "react";
import Tooltip from "./tooltip";

export function Avatar({ avatar }) {
  return <img className="avatar" src={avatar} alt="avatar" />;
}

export default function Profile({ profileName, avatar }) {
  const handleClick = async () => {
    const url ="www.jutin.com"
    try {
      await navigator.clipboard.writeText(url)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="profile">
      <Avatar avatar={avatar} />
      <h3>{profileName}</h3>
      <h4>
        <i className="fa fa-twitter" style={{ fontSize: 20 }}></i>{" "}
        <a href="https://twitter.com/jutin001">@jutin001</a>
      </h4>
      <div className="sharebtn" onClick={handleClick}>
        <Tooltip text="Copy Url">
          <i className="fa fa-share share"></i>
        </Tooltip>
      </div>
    </div>
  );
}
