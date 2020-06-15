import React from 'react'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css';


function Accueil(){
    return(
        <div>
            <div className="texty-demo" style={{ marginTop: 64 }}>
                <Texty>Maxence Delecourt</Texty>
            </div>
        </div>
    )
}

export default Accueil;