import React from "react";
import Background from '../media/acapulco2.jpeg';
import { Link } from 'react-router-dom';

import BottomMenu from "../components/BottomMenu";
import AppleNav from "../components/AppleNav";

export default function AppleTV () {
    return(
            <div style={{ backgroundImage: `url('${Background}')` }} className="AppleTvMain">
                
                <AppleNav />

                <Link to="/"><div className="BackToHome"> <p>Home</p> </div></Link>

                <BottomMenu />

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

                    `}
                </style>

            </div>
    );
}