import React from 'react'
function Header(){

    
    return (
        <div className="header">
            <h2>MEME GENERATOR</h2>
            <img src={require("./pf.jpeg")} alt="meme"/>
        </div>
    )
}

export default Header