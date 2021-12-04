import React from 'react';


const Cat =({x,y})=>{
    return (
        <div>
<img src={"cat.png"} alt="pic" style={{position:"absolute",left:x,top:y}}/>
        </div>
    );
}



export default Cat;