import React from 'react'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css';


function Accueil(){
    return(
        <div>
            <div className="texty-demo" style={{ marginTop: 64 }}>
                <Texty>Ant Motion</Texty>
            </div>
        </div>
    )
}

export default Accueil;