import React from "react";
import Background from '../media/acapulco2.jpeg';
import { Link } from 'react-router-dom';

import BlackBird from '../media/black_bird.jpeg';
import ForAllMankind from '../media/for_all_mankind.jpeg';
import See from '../media/see.jpeg';
import SlowHorses from '../media/slow_horses.jpeg';
import TedLasso from '../media/ted_lasso.jpeg';
import Wecrashed from '../media/wecrashed.jpeg';

export default function AppleTV () {
    return(
            <div style={{ backgroundImage: `url('${Background}')` }} className="AppleTvMain">
                <div className="AppleTvNav">
                    <div className="AppleTvNavItem">Watch Now</div>
                    <div className="AppleTvNavItem">Movies</div>
                    <div className="AppleTvNavItem">TV Shows</div>
                    <div className="AppleTvNavItem">Sports</div>
                    <div className="AppleTvNavItem">Kids</div>
                    <div className="AppleTvNavItem">Library</div>
                </div>

                <Link to="/"><div className="BackToHome"> <p>Home</p> </div></Link>

                <div className="AppleTvBottomMenu">
                    <div className="BottomMenuRow">
                        <div className="BottomMenuItem"> <img src={BlackBird} /> </div>
                        <div className="BottomMenuItem"> <img src={ForAllMankind} /> </div>
                        <div className="BottomMenuItem"> <img src={See} /> </div>
                        <div className="BottomMenuItem"> <img src={SlowHorses} /> </div>
                        <div className="BottomMenuItem"> <img src={TedLasso} /> </div>
                        <div className="BottomMenuItem"> <img src={Wecrashed} /> </div>
                    </div>
                </div>

                <style jsx>
                    {`
                        * {
                            overflow: hidden;
                        }
                        .AppleTvMain {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                        }

                        .BackToHome {
                            position: absolute;
                            text-align: center;
                            width: 100px;
                            height: 40px;
                            top: 20px;
                            left: 35px;
                            background-color: transparent;
                            border-radius: 50px;
                            border: 1px solid #fff;
                            color: #ffffff;
                            transition: 0.1s;
                        }
                        
                        .BackToHome p {
                            font-size: 15px;
                            line-height: 10px;
                            font-weight: 500;
                        }
                        
                        .BackToHome:hover {
                            background-color: #ffffff;
                            border-radius: 50px;
                            border: 1px solid #fff;
                            color: #000000;
                            transition: 0.3s;
                        }
                        
                        .AppleTvNav {
                            position: absolute;
                            top: 20px;
                            left: 0;
                            right: 0;
                            margin: 0 auto;
                            max-width: 55em;
                            height: 45px;
                            display: flex;
                            background-color: rgba(0, 0, 0, 0.8);
                            border-radius: 50px;

                        }
                        
                        .AppleTvNavItem {
                            text-align: center;
                            margin: auto;
                            width: 10em;
                            height: auto;
                            line-height: 45px;
                            font-weight: 500;
                            font-size: 15px;
                            color: #ffffff;
                            
                            transition: 0.3s;
                        }
                        
                        .AppleTvNavItem:hover {
                            transform: scale(1.1);
                            background-color: #ffffff;
                            border-radius: 50px;
                            color: #000000;

                            transition: 0.3s;
                        }
                        
                        .AppleTvBottomMenu {
                            position: absolute;
                            bottom: 20px;
                            left: 20px;
                            right: 0;
                            border-radius: 10px;
                            background-color: rgba(0, 0, 0, 0.8);
                            width: max-content;
                            height: 27%;
                        }
                        
                        .BottomMenuRow {
                            display: flex;
                        }

                        .BottomMenuRow:hover .BottomMenuItem {
                            transform: translateX(-10%);
                        }

                        .BottomMenuItem:hover ~ .BottomMenuItem {
                            transform: translateX(10%);
                         }
                        
                        .BottomMenuItem {
                            margin: 20px 0 20px 20px;
                            width: 25%;
                            height: auto;
                            transition: 0.2s;
                        }
                        
                        .BottomMenuItem img {
                            border-radius: 10px;
                        }

                        .BottomMenuItem:hover {
                            transition: 0.3s;
                            transform: scale(1.1) !important;
                        }

                    `}
                </style>

            </div>
    );
}