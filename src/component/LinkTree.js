import React, { useState } from "react";
import { data } from "../data/db.js";
import Tooltip from "./Tooltip.js";

export default function LinkTree() {
  return (
    <div>
      {data.map((content) => (
        <Content
          key={content.id}
          contentName={content.name}
          description={content.description}
        />
      ))}
    </div>
  );
}

function Content({ contentName, description }) {
  const [isVisable, setIsVisable] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleIsCopied = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleCopyUrl = async () => {
    const url = contentName;
    try {
      await navigator.clipboard.writeText(url);
      handleIsCopied();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="content-container"
      onMouseOver={() => setIsVisable(true)}
      onMouseLeave={() => setIsVisable(false)}
    >
      <Tooltip text={description}>
        <div className="content">
          <strong> {contentName} </strong>
          {isCopied && <div className="copied">Copied</div>}

          {isVisable && (
            <i onClick={handleCopyUrl} className="fa fa-share share"></i>
          )}
        </div>
      </Tooltip>
    </div>
  );
}
