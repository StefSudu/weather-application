import React from "react";
import '../StyleSheets/Header.css'
import Favorite from '@mui/icons-material/FavoriteBorder';

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerContainerLeftOptions">
                <div className="leftOptionButton">
                    <Favorite sx={{fontSize:22}}/>
                </div>
                <div className="leftOptionButton">
                    <p>b</p>
                </div>
                <div className="leftOptionButton">
                    <p>b</p>
                </div>
                <div className="leftOptionButton">
                    <p>b</p>
                </div>
            </div>
            <div className="headerContainerMiddleOptions">
                <div className="headerLogo">
                    <p>Weather Application</p>
                </div>
            </div>
            <div className="headerContainerRightOptions">
                <p>Login / Create Account</p>
            </div>
        </div>
    )
}