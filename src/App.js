import React, { useEffect, useState } from "react";
import Profile from "./component/Profile";
import LinkTree from "./component/LinkTree";
import Icon from "./component/Icon";
import Footer from "./component/Footer";
function App() {
  const [scrollUp, setScrollUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };
    window.addEventListener("scroll" , handleScroll);

    return () => window.removeEventListener('scroll' , handleScroll)
    
  },[]);

  return (
    <>
      <Profile profileName="Dikonu jutin" avatar={"./avatar.jpg"} />
      <LinkTree />
      <div className="icons">
        <Icon
          icon="https://img.icons8.com/color/48/null/slack-new.png"
          title="slack"
        />{" "}
        <Icon
          icon="https://img.icons8.com/fluency-systems-filled/48/null/github.png"
          title="git"
          href="https://github.com/jutin0852"
        />
      </div>
      <Footer scrollUp={scrollUp}/>
    </>
  );
}

export default App;
