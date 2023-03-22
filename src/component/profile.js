import React, { useState } from "react";
import Tooltip from "./toolTip";

export default function Profile({ profileName, avatar }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleIsCopied = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const handleCopyUrl = async () => {
    const url = "https://jutins-linktree1.vercel.app";
    try {
      await navigator.clipboard.writeText(url);
      handleIsCopied();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="profile">
      <Avatar avatar={avatar} />
      <h3>{profileName}</h3>
      <h4>
        <i className="fa fa-twitter" style={{ fontSize: 20 }}></i>{" "}
        <a
          href="https://twitter.com/jutin001"
          target={"_blank"}
          rel="noreferrer"
        >
          @jutin001
        </a>
      </h4>
      <div className="sharebtn" onClick={handleCopyUrl}>
        <Tooltip text={isCopied ? "Copied!!" : "Copy Url"}>
          <i className="fa fa-share share"></i>
        </Tooltip>
      </div>
    </div>
  );
}

function Avatar({ avatar }) {
  return <img className="avatar" src={avatar} alt="avatar" />;
}
