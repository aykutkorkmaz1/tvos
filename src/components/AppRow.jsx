import React from "react";
import { Link } from 'react-router-dom';

import AppleTV from '../media/apple_tv.png';
import AppleArcade from '../media/apple_arcade.png';
import AppleFitness from '../media/apple_fitness.png';
import AppleMusic from '../media/apple_music.png';
import ApplePhotos from '../media/apple_photos.png';

export default function AppRow () {
    return (
        <div className="main-row">
            <div className="row-app">
                <Link to="/apple-tv"> <div className="row-app-item"> <img src={AppleTV} /> </div> </Link>
                <div className="row-app-item"> <img src={AppleArcade} /> </div>
                <div className="row-app-item"> <img src={AppleFitness} /> </div>
                <div className="row-app-item"> <img src={AppleMusic} /> </div>        
                <Link to="/apple-photos"> <div className="row-app-item"> <img src={ApplePhotos} /> </div> </Link>
            </div>

            <style jsx>
                {`
                    .main-row {
                        position: absolute;
                        bottom: 20px;
                        left: 0;
                        right: 0;
                        margin: 0 auto;
                        width: 97%;
                        height: auto;
                        border-radius: 10px;
                        background-color: rgba(0, 0, 0, 0.8);
                    }
                    
                    .row-app{
                        margin: auto;
                        width: 100%;
                        display: flex;
                    }

                    .row-app-item {
                        padding: 20px 0 20px 0;
                    }
                    
                    .row-app-item img{
                        width: 85%;
                        height: 95%;
                        border-radius: 10px;
                        transition: 0.2s;
                    }

                    .row-app-item img:hover {
                        transition: 0.3s;
                        transform: scale(1.1);
                    }
                `}
            </style>

        </div>
    );
}