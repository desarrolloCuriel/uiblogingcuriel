import React from "react";
import Nanvar from './Nanvar'

function Layout(props) {
   // const children=props.children
   //props.children
    return (<React.Fragment>
                <Nanvar />
                {props.children}
           </React.Fragment>);
}

export default Layout;