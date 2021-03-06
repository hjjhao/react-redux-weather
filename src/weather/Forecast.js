import React from 'react';

export default function forecast(props){

    return (
        <section className="weather-forecast">
        <div className="forecast__switch">
          <button className="forecast__switch_0 switch-active">5 items</button>
          <button className="forecast__switch_1">10 items</button>
        </div>

        <div class="weather-forecast__row">
          <span class="weather-forecast__day">Fri</span>
          <span class="weather-forecast__icon">
            <i class="fa fa-clock-o"></i> 10:00
          </span>
          <span class="weather-forecast__high">19 c</span>
          <span class="weather-forecast__low">8 c</span>
        </div>
        <div class="weather-forecast__row">
          <span class="weather-forecast__day">Fri</span>
          <span class="weather-forecast__icon">
            <i class="fa fa-clock-o"></i> 13:00
          </span>
          <span class="weather-forecast__high">19 c</span>
          <span class="weather-forecast__low">8 c</span>
        </div>

        <div class="weather-forecast__row">
          <span class="weather-forecast__day">Fri</span>
          <span class="weather-forecast__icon">
            <i class="fa fa-clock-o"></i> 16:00
          </span>
          <span class="weather-forecast__high">19 c</span>
          <span class="weather-forecast__low">8 c</span>
        </div>
      </section>
    )
}