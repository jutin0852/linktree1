import React, {useState} from "react";
import { data } from "./db.js";
import Tooltip from "./tooltip.js";

export function Content({ contentName, description }) {
  const [isVisable, setIsVisable] = useState(false);
  
  const handleClick = async () => {
    const url = contentName;
    try {
      await navigator.clipboard.writeText(url)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div
      className="content-container"
      onMouseOver={() => setIsVisable(true)}
      onMouseLeave={() => setIsVisable(false)}
    >
      <Tooltip text={description}>
        <div className="content">
          <strong> {contentName} </strong>
          { isVisable && <i onClick={handleClick} className="fa fa-share share"></i>} 
        </div>
      </Tooltip>
    </div>
  );
}

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
