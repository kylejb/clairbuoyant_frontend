import React from 'react';
import Script from '../../Hooks/Script.js'
import './wave/waves.css';

const WaveModel = () => {

 
    return (
        <>
        <div id="overlay" ></div>
        <div id="ui" >
            <div id="camera">
                <canvas id="profile"></canvas>
                <div id="length"></div>
                <div id="end"></div>
                <div id="wind">
                    <span id="wind-speed"></span><span id="wind-unit"> m/s</span>
                    <div id="wind-label">WIND</div>
                </div>

                <div id="size">
                    <span id="size-value"></span><span id="size-unit"> m</span>
                </div>
                <div id="size-label">SIZE</div>
                <div id="choppiness"></div>
                <div id="choppiness-label">CHOPPINESS</div>
            </div>
        </div>
        
        <canvas id="simulator"></canvas>  

        <Script src="../../../public/shared.js" async={false} />  
        <Script src="../../../public/simulation.js" async={false} />    
        <Script src="../../../public/ui.js" async={false} />    
        <Script src="../../../public/waves.js" async={false} />
        </>
    );
  
}

export default WaveModel;