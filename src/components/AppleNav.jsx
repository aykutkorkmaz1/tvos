import React from "react";

export default function AppleNav () {
    return(
        <div className="AppleNav">
            <div className="AppleNavItem">Watch Now</div>
            <div className="AppleNavItem">Movies</div>
            <div className="AppleNavItem">TV Shows</div>
            <div className="AppleNavItem">Sports</div>
            <div className="AppleNavItem">Kids</div>
            <div className="AppleNavItem">Library</div>

            <style jsx>
                {`
                    .AppleNav {
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
                    
                    .AppleNavItem {
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
                    
                    .AppleNavItem:hover {
                        transform: scale(1.1);
                        background-color: #ffffff;
                        border-radius: 50px;
                        color: #000000;

                        transition: 0.3s;
                    }
                `}
            </style>
        </div>
    );
}