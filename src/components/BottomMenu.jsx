import React from "react";
import { Link } from 'react-router-dom';

import BlackBird from '../media/black_bird.jpeg';
import ForAllMankind from '../media/for_all_mankind.jpeg';
import See from '../media/see.jpeg';
import SlowHorses from '../media/slow_horses.jpeg';
import TedLasso from '../media/ted_lasso.jpeg';
import Wecrashed from '../media/wecrashed.jpeg';

export default function BottomMenu () {
    return (
        <div className="AppleTvBottomMenu">
            <div className="BottomMenuRow">
                <div className="BottomMenuItem"> <img src={BlackBird} /> </div>
                <div className="BottomMenuItem"> <img src={ForAllMankind} /> </div>
                <div className="BottomMenuItem"> <img src={SlowHorses} /> </div>
                <div className="BottomMenuItem"> <img src={See} /> </div>
                <div className="BottomMenuItem"> <img src={TedLasso} /> </div>
                <div className="BottomMenuItem"> <img src={Wecrashed} /> </div>
            </div>

            <style jsx>
                {`
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