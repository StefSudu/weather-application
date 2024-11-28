import React from "react";
import '../StyleSheets/Header.css'

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerContainerLeftOptions">
                <p>button 1</p>
                <p>button 2</p>
            </div>
            <div className="headerContainerMiddleOptions">
                <div className="headerLogo">
                    <p>Weather App</p>
                </div>
            </div>
            <div className="headerContainerRightOptions">
                <p>button 1</p>
                <p>button 2</p>
            </div>
        </div>
    )
}