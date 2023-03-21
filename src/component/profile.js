import React, {useState} from "react";
import Tooltip from "./tooltip";

export function Avatar({ avatar }) {
  return <img className="avatar" src={avatar} alt="avatar" />;
}

export default function Profile({ profileName, avatar}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClickCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  
  const handleClick = async () => {
    const url ="https://jutins-linktree1.vercel.app/"
    try {
      await navigator.clipboard.writeText(url)
      handleClickCopy()
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
        <Tooltip text={isCopied ? "Copied!!" : "Copy Url"}>
          <i className="fa fa-share share"></i>
        </Tooltip>

      </div>
    </div>
  );
}
