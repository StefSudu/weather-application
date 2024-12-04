import React from "react";
import '../StyleSheets/Header.css'
import Favorite from '@mui/icons-material/FavoriteBorder';
import RocketLaunchOutline from '@mui/icons-material/RocketLaunchOutlined'
import DisplaySettingsOutlined from '@mui/icons-material/DisplaySettingsOutlined'
import DeleteSweep from '@mui/icons-material/DeleteSweepOutlined'

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerContainerLeftOptions">
                <div className="leftOptionButton">
                    <Favorite sx={{fontSize:22}}/>
                </div>
                <div className="leftOptionButton">
                    <RocketLaunchOutline sx={{fontSize:22}}/>
                </div>
                <div className="leftOptionButton">
                    <DisplaySettingsOutlined sx={{fontSize:22}}/>
                </div>
                <div className="leftOptionButton">
                    <DeleteSweep sx={{fontSize:22}}/>
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