import React from "react";
import Profile from "./component/profile";
import LinkTree from "./component/content";
import Icon from "./component/icon";
import Footer from "./component/footer";
function App() {
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
      <Footer />
    </>
  );
}

export default App;
