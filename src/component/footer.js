import React from "react";
export default function Footer({scrollUp}) {
  const handleClick = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <footer>
      <div className="zuri">
        <h2>
          Zuri <span>.</span> Internship
        </h2>
      </div>
      <div className="HNG">HNG Internship 9 Frontend Task</div>
      <div>
        <img src="./IFG.svg" alt="ifg" />
      </div>
      {scrollUp && <div onClick={handleClick} className="go-up"> <img style={{width:30}} src="https://img.icons8.com/plumpy/24/null/circled-up-2.png" alt="up"/></div>}
    </footer>
  );
}
