import React, { Component } from 'react';
import BannerMax from '../img/BannerMax.png'

function Banner() {
    return (
        <div style="position:relative; height:400px">
            <div style="position:absolute;z-index:1">
                <img src="images/greenhouse.jpg">
        </div>
                <div style="position:absolute;top:360px; width:600px; height:400px; z-index:2;font-size:200%">
                    <center><b>Ma maison...</b></center>
                </div>
            </div>
    );
}

export default Banner