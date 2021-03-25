import React from 'react'
import TodayWeather from '../todayWeather/TodayWeather'
import FiveDaysWeather from '../fivedayWeather/FiveDaysWeather'

export default function WeatherContainer({data, dataTwo}) {
    return (
        <div className="weather-container">
            <TodayWeather data={data} />
            <FiveDaysWeather dataTwo={dataTwo}/>
        </div>
    )
}
