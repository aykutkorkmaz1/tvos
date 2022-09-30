import React from "react";

import AppleTV from '../media/apple_tv.png';
import AppleArcade from '../media/apple_arcade.png';
import AppleFitness from '../media/apple_fitness.png';
import AppleMusic from '../media/apple_music.png';
import ApplePhotos from '../media/apple_photos.png';

export default function AppRow () {
    return (
        <div className="main-row">
            <div className="row-app">
                <div className="row-app-image"> <img src={AppleTV} /> </div>
                <div className="row-app-image"> <img src={AppleArcade} /> </div>
                <div className="row-app-image"> <img src={AppleFitness} /> </div>
                <div className="row-app-image"> <img src={AppleMusic} /> </div>
                <div className="row-app-image"> <img src={ApplePhotos} /> </div>
            </div>

            <style jsx>
                {`
                    .main-row {
                        position: absolute;
                        bottom: 20px;
                        left: 0;
                        right: 0;
                        margin: 0 auto;
                        z-index: 10;
                        width: 97%;
                        height: auto;
                        border-radius: 10px;
                        background-color: rgba(0, 0, 0, 0.6);
                    }
                    
                    .row-app{
                        margin: auto;
                        z-index: 5;
                        width: 100%;
                        display: flex;
                    }

                    .row-app-image {
                        padding: 20px 0 20px 0;
                    }
                    
                    .row-app-image img{
                        width: 85%;
                        height: 95%;
                        border-radius: 10px;
                        transition: 0.4s;
                    }

                    .row-app-image img:hover {
                        transition: 0.2s;
                        transform: scale(1.1);
                    }
                `}
            </style>

        </div>
    );
}