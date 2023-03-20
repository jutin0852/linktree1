import React, { useState } from "react";
export default function Tooltip({ text, children }) {
  const [isVisable, setIsVisable] = useState(false);
  return (
    <div
      className="tool-tip"
      onMouseOver={() => setIsVisable(true)}
      onMouseLeave={() => setIsVisable(false)}
    >
      {isVisable && (text ? <div className="tool-tip-text">{text}</div> : null)}
      {children}
    </div>
  );
}
