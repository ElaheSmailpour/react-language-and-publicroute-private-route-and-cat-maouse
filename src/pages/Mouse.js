import React, { useState } from 'react';


const Mouse =({render})=>{
    const [mousePosition,setMousePosition]=useState({})

    const onMouseMove=(e)=>{
    
        setMousePosition({x:e.clientX,y:e.clientY})
        }
    return (
        <div onMouseMove={onMouseMove} style={{padding:"20rem",cursor : 'url(mouse.png),auto'}}> 
      {render(mousePosition.x,mousePosition.y)}
         </div>
    );
}



export default Mouse;
