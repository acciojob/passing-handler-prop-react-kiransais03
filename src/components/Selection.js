import React, { useState } from "react";
import "../styles/Child.css"

const Selection=({boxkey,nextBackground})=>{
    let [selectedbackground,setSelectedbackground]=useState({background:""});
    
    function updatecolor() {
        setSelectedbackground({background:nextBackground.background})
    }
     
    return(<div onClick={updatecolor} style={selectedbackground.background ? {backgroundColor:selectedbackground.background}: {}} className="fix-box">
      <h2 className=".subheading">Selection</h2>
    </div>)
}

export default Selection;