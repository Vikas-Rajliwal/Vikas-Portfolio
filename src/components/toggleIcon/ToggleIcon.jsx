import React from "react";
import { useState } from "react";
import "./toggleIcon.css"
function ToggleIcon() {
    const [click,setClick]=useState(false);
    return (
        <div className={click?"change":"container"} onClick={()=>{setClick(!click)}}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}
export default ToggleIcon;