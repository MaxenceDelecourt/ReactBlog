import React, { Component } from 'react';
import BannerMax from '../img/BannerMax.png'

function Banner() {
    return (
        <div style={{ position: 'absolute', zIndex: '1' }}>
            <img src={BannerMax} />
        </div>
    );
}

export default Banner