// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import axios from "axios";
import Img from './assets/plane.svg'
import NavBar from "./Components/NavBar";
import Card from './Components/Card'

function App() {
    const axiosOptions = { headers: { "X-API-Key": "f419ee367c914e7b94134a009f" } }
    const [showIcon, setShowIcon] = useState(true)
    const [icaoCodes, setIcaoCodes] = useState('')
    const [airports, setAirports] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const codes = icaoCodes.split(' ')
        const info = {
            station: {
                icao: null,
                name: null,
                lat: null,
                long: null,
                runways: []
            },
            weather: {
                time: null,
                flightRules: null,
                temp: null,
                humidity: null,
                visibility: null,
                windSpeed: null,
                windDirection: null,
                cloudCoverage: null
            }
        }

        codes.forEach((x) => {
            const goodAirports = ['50r', 'egll', 'kaus', 'khou']

            if (goodAirports.includes(x)) {

                const infoUrl = 'https://foreflight-project.vercel.app/airports/' + x + '.json' // Optional for dev: 'http://localhost:3000/airports/' + x + '.json'
                const weatherUrl = 'https://foreflight-project.vercel.app/weather/' + x + '.json'  // Optional for dev: 'http://localhost:3000/weather/' + x + '.json'

                axios.all([
                    axios.get(infoUrl),
                    axios.get(weatherUrl)
                ])
                    .then(axios.spread((infoRes, weatherRes) => {
                        let airport = infoRes.data
                        let weather = weatherRes.data

                        info.station.icao = airport.icao ? airport.icao : airport.faaCode
                        info.station.name = airport.name
                        info.station.lat = airport.latitude.toString().substring(0, 8)
                        info.station.long = airport.longitude.toString().substring(0, 9)
                        info.station.runways = airport.runways

                        info.weather.time = weather.report.conditions ? weather.report.conditions.dateIssued.substring(11, 16) : weather.report.forecast.conditions[0].dateIssued.substring(11, 16)
                        info.weather.flightRules = weather.report.conditions && weather.report.conditions.flightRules
                        info.weather.temp = weather.report.conditions ? weather.report.conditions.tempC + 'C' : 'Unknown'
                        info.weather.humidity = weather.report.conditions ? weather.report.conditions.relativeHumidity : weather.report.forecast.conditions[0].relativeHumidity
                        info.weather.windSpeed = weather.report.conditions ? weather.report.conditions.wind.speedKts : weather.report.forecast.conditions[0].wind.speedKts
                        info.weather.windDirection = weather.report.conditions ? weather.report.conditions.wind.direction : weather.report.forecast.conditions[0].wind.direction
                        info.weather.cloudCoverage = weather.report.conditions ? weather.report.conditions.cloudLayers[0].coverage : weather.report.forecast.conditions[0].cloudLayers[0].coverage
                        info.weather.visibility = weather.report.conditions ? weather.report.conditions.visibility.distanceSm : weather.report.forecast.conditions[0].visibility.distanceSm

                        setAirports([...airports, info])

                    }))

            } else {
                const checkWXUrl = "https://api.checkwx.com/metar/" + x + "/decoded";

                axios.get(checkWXUrl, axiosOptions).then((response) => {
                    let res = response.data.data;

                    info.station.icao = res[0].icao
                    info.station.name = res[0].station.name
                    info.station.lat = res[0].station.geometry.coordinates[1]
                    info.station.long = res[0].station.geometry.coordinates[0]
                    info.station.runways = [{ ident: 'Unable to Obtain Runway Data' }]

                    info.weather.time = res[0].observed.substring(11, 16)
                    info.weather.flightRules = res[0].flight_category.toLowerCase()
                    info.weather.temp = res[0].temperature.celsius + 'C'
                    info.weather.humidity = res[0].humidity.percent
                    info.weather.windSpeed = res[0].wind.speed_kts
                    info.weather.windDirection = res[0].wind.degrees
                    info.weather.cloudCoverage = res[0].clouds[0].code
                    info.weather.visibility = res[0].visibility.miles

                    setAirports([...airports, info])
                })
            }
        })
        setIcaoCodes('')
        setShowIcon(false)
    }

    return (
        <div className='container mx-auto mt-4 mb-8'>
            <NavBar />

            <div className='flex flex-grow justify-center my-8'>
                <div>
                    <form onSubmit={handleSubmit} >
                        <div className='flex flex-row'>
                            <div>
                                <input value={icaoCodes} onChange={(e) => setIcaoCodes(e.target.value)} type='text' required placeholder='Enter ICAO Codes' className='border-4 rounded-lg p-4 mr-4 border-blue-700 focus:border-blue-500 text-black'></input>
                                <p className='flex text-xs text-gray-400 ml-2 mt-1'>Ex: kaus, khou, 50r, egll</p>
                            </div>
                            <button className='border-4 rounded-lg p-4 h-16 border-blue-700 bg-blue-700 text-white hover:border-blue-500 hover:bg-blue-500'>Search</button>
                        </div>
                    </form>
                </div>
            </div>

            {showIcon && <div className='flex flex-grow justify-center mt-24'>
                <img src={Img} alt='not a plane' className=' w-1/3'></img>
            </div>}

            {airports && <Card airports={airports} />}
        </div>
    );
}

export default App;
