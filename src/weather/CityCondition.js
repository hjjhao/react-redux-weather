import React from 'react';
import umberella from '../images/icon/icon-umberella.png';
import wind from '../images/icon/icon-wind.png';
import compass from '../images/icon/icon-compass.png';

function CityCondtion(props) {

    return (
        <section className="weather-condition">
            <div className="weather-condition__location">Brisbane</div>
            <div style={{textAlign: 'center', fontSize: '14px'}}>Clear</div>
            <div className="weather-condition__temp">19 c</div>
            <div className="weather-condition__desc">
                <div>
                    <img src={umberella} />
                    <span className="citem">20%</span>
                </div>
                <div>
                    <img src={wind} /> <span class="citem">3 km/h</span>
                </div>
                <div>
                    <img src={compass} /> <span class="citem">NE</span>
                </div>
            </div>
        </section>
    );
}

export default CityCondtion;