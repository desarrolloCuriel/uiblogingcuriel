import React from "react";
import Nanvar from "./Nanvar";
import Footer from "./Footer";
function Layout(props) {
  return (
    <React.Fragment>
      <Nanvar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
