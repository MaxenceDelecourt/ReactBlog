import React, { Component } from 'react';
import BannerMax from '../img/BannerMax.png'

function Banner() {
    return (
        <div style={{position:'relative', width:'100%'}}>
            <div style={{position:'absolute', zIndex:'1'}}>
                <img src={BannerMax}/>
            </div>
            <div style={{position:'absolute', top:'360px',  width:'600px',  height:'400px',  zIndex:'2', fontSize:'200%'}}>
                <center><b>Ma maison...</b></center>
            </div>
        </div>
    );
}

export default Banner