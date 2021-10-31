import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios";
import { useEffect, useState } from "react";

const testUrl = 'http://localhost:3000/airports/kaus.json'
const weatherUrl = 'http://localhost:3000/weather/kaus.json'

const Card = () => {
    const [airport, setAirport] = useState(null)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios.get(testUrl).then(res => {
            let data = res.data
            console.log(data)
            setAirport(data)
        })

        axios.get(weatherUrl).then(res => {
            console.log(res.data)
            setWeather(res.data)
        })
    }, [])


    return (
        <div className='flex flex-grow justify-center'>
            <div className='flex flex-col justify-between bg-blue-700 rounded-lg p-8 -my-1  text-white z-10 w-1/4'>
                <div>
                    <div className='flex items-baseline'>
                        {airport && <p className='text-2xl'>{airport.name}</p>}
                        {airport && <p className='text-sm text-gray-200 ml-1'>({airport.icao})</p>}
                    </div>
                    <p className='text-base'>Zulu Time</p>
                    <p className='text-sm'><FontAwesomeIcon icon={['fas', 'compass']} /> Lat / Long</p>
                </div>
                <div className='mt-24'>
                    <div className='mb-2'><FontAwesomeIcon icon={['fas', 'sun']} size='2x' /></div>
                    {weather && <div className='text-xl'>Temp {weather.report.conditions.tempC} &deg;C / Humidity {weather.report.conditions.relativeHumidity} %</div>}
                </div>

            </div>
            <div className='bg-gray-700 rounded-md -mx-2 p-6 text-white z-0 w-1/3'>
                <div>
                    {weather && <div>Wind Speed: {weather.report.conditions.wind.speedKts}</div>}
                    <div>Wind Direction</div>
                    <div>Cloud Coverage</div>
                    <div>Visibility</div>
                </div>
                <div>
                    <h2>Runways Available</h2>
                    <div>
                        18/36
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Card
