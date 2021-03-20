import React from 'react'
import { VscCloudDownload, VscCloudUpload } from 'react-icons/vsc'
import { TiWeatherCloudy } from 'react-icons/ti'
import { DiSenchatouch } from 'react-icons/di'
import { WiHumidity } from 'react-icons/wi'
import { ImMeter } from 'react-icons/im'
import { MdVisibility } from 'react-icons/md'
import { WiStrongWind } from 'react-icons/wi'

export default function TodayWeather({data}) {
    return (
        <div className="today-weather">
                { data && data ? data.map(info => (
                        <div key={info.id}>
                            <div className="location-info">
                                <div className="time-string">
                                    <p>{new Date().toLocaleTimeString()}</p>&nbsp;<p>{new Date().toDateString()}</p>
                                </div>
                                <div className="city-string">
                                    <p>{info.name},</p>
                                    <p>{info.sys.country}</p>
                                </div>
                            </div>
                            {
                                data && data ? data[0].weather.map((item) => (
                                    <div key={item.id}>
                                        <div className="temp-string">
                                            <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="icon"/>
                                            <p>{info.main.temp} <sup>o</sup>C</p>
                                        </div>
                                        <div className="description">
                                            <p> <TiWeatherCloudy /> {item.main}, </p>
                                            <p> {item.description}</p>
                                        </div>
                                    </div>
                                )) : ""
                            }
                            <div className="min-max">
                                <p> <VscCloudDownload  /> Min: {info.main.temp_min} <sup>o</sup>C</p>
                                <p> <VscCloudUpload /> Max: {info.main.temp_max} <sup>o</sup>C</p>
                                <p> <DiSenchatouch /> Feels like {info.main.feels_like} <sup>o</sup>C</p>
                            </div> 
                            
                           <div className="humidity">
                                <p> <WiHumidity /> Humidity: {info.main.humidity}%</p>
                                <p> <ImMeter /> Pressure: {info.main.pressure}hPa</p>
                            </div>

                            <div className="wind">
                                <p> <MdVisibility /> visibility: {info.visibility/1000} km</p>
                                <p> <WiStrongWind /> wind_speed: {info.wind.speed} m/s SE</p>
                            </div>
                        </div>
                    )) : <div className="note">
                            <p>please select city </p>
                            <img className="select-img" src="https://res.cloudinary.com/du0xsvxag/image/upload/v1616222911/2829247_igtkmj.jpg" alt="select" />
                        </div>
                
                } 
                </div>

    )
}
