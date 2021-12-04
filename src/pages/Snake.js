import React from 'react';


const Snake =({x,y})=>{
    return (
        <div>
<img src={"snake.png"} alt="pic" style={{position:"absolute",left:x,top:y}}/>
        </div>
    );
}



export default Snake;