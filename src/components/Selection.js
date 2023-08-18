import React, { useState } from "react";
import "../styles/Child.css"

const Selection=({array,nextBackground})=>{
    let [selectedbackground,setSelectedbackground]=useState({background:""});
    console.log(selectedbackground.background)
    
    let [color1,setColor1]=useState("")
    function updatecolor() {
        const updatedBackground = nextBackground.background;
        setSelectedbackground({background:nextBackground.background})
        array.forEach((element) => {
            if (element.background === updatedBackground) {
              setColor1(element.key);
            }
          });
    //    console.log(color1)
    }
     
    return(<div data-testid={selectedbackground.background ? color1: undefined} onClick={updatecolor} style={selectedbackground.background ? {backgroundColor:selectedbackground.background}: {}} className="fix-box">
      <h2 className=".subheading">Selection</h2>
    </div>)
}

export default Selection;