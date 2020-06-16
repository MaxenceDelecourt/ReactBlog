import React, { Component } from 'react';
import BannerMax from '../img/BannerMax.png'

function Banner() {
    return (
        <img src={BannerMax} style={{ width: '100%' }} />
        <div class="container">
            <img src="https://1.bp.blogspot.com/-w-wLWap_ydk/XSZZ3wSKtcI/AAAAAAAAFFY/-BWB5LvxBA0imZ8uMw-XvTmsw8k7Pk1uQCLcBGAs/s400/test1.jpg">
                <div class="text">
                    <h1>Fleurs</h1>
                </div>
        </div>

    );
}

export default Banner