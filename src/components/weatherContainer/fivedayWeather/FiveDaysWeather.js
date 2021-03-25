import { TiWeatherCloudy } from 'react-icons/ti'

export default function FiveDaysWeather({dataTwo}) {
    let idx = 0;
    return (
        <div className="fiveday-weather">
            <h2>5-day forecast</h2>
           {
                dataTwo[0] && dataTwo[0] ? dataTwo[0].list.map((item) => (
                  <div key={idx++} className="weather-item">
                      <div className="date-time">
                          <p>{new Date(item.dt_txt).toDateString()}</p>
                          <p>{new Date(item.dt_txt).toLocaleTimeString()}</p>
                      </div>
                      <div className="weather-info">
                        {
                            item && item ? item.weather.map((info) => (
                                <div key={info.id} className="weather-icon">
                                    <div className="weather-temp">
                                        <img src={`http://openweathermap.org/img/wn/${info.icon}@2x.png`} alt="icon"/>
                                        <div className="temp">
                                            <p>{item.main.temp_max} / {item.main.temp_min} <sup>o</sup>C</p>
                                        </div>
                                    </div>
                                </div>
                            )) : "not loadin"
                        }
                      </div>
                      <div className="weather-description">
                            {
                                item && item ? item.weather.map((info) => (
                                    <div key={idx++} className="weather-main">
                                        <p> <TiWeatherCloudy /> {info.main}, </p>
                                        <p> {info.description}</p>
                                        
                                    </div>  )) : "not loadin"
                            }
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
