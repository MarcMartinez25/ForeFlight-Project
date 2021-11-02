import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useEffect } from "react";


const Card = ({ airports }) => {

    return (
        <div className='flex flex-col-reverse'> {airports.map((airport) => (
            <div className='flex flex-grow justify-center mt-8'>
                <div className='flex flex-col justify-between bg-blue-700 rounded-lg p-8 -my-1  text-white z-10 w-1/4'>
                    <div>
                        <div className='flex items-baseline'>
                            <p className='text-2xl'>{airport.info.name}</p>
                            <p className='text-sm text-gray-200 ml-1'>({airport.info.icao ? airport.info.icao : airport.info.faaCode})</p>
                        </div>
                        <p className='text-base'><FontAwesomeIcon icon={['fas', 'clock']} /> {airport.weather.report.conditions ? airport.weather.report.conditions.dateIssued.substring(11, 16) : airport.weather.report.forecast.conditions[0].dateIssued.substring(11, 16)}</p>
                        <p className='text-sm'><FontAwesomeIcon icon={['fas', 'compass']} /> {airport.info.latitude.toString().substring(0, 8)} / {airport.info.longitude.toString().substring(0, 9)}</p>
                    </div>
                    <div className='mt-24'>
                        <div className='mb-2'>{airport.weather.report.conditions && airport.weather.report.conditions.flightRules === 'vfr' ? <FontAwesomeIcon icon={['fas', 'sun']} size='2x' /> : <FontAwesomeIcon icon={['fas', 'cloud']} size='2x' />}</div>
                        <div className='text-xl'>Temp {airport.weather.report.conditions ? airport.weather.report.conditions.tempC : 'Unknown'} &deg;C / Humidity {airport.weather.report.conditions ? airport.weather.report.conditions.relativeHumidity : airport.weather.report.forecast.conditions[0].relativeHumidity} %</div>
                    </div>

                </div>
                <div className='flex flex-col justify-between bg-gray-700 rounded-md -mx-2 p-6 text-white z-0 w-1/3 text-xl'>
                    <div>
                        <div className='flex flex-row justify-between'>
                            <p>Wind Speed:</p>
                            <p>{airport.weather.report.conditions ? airport.weather.report.conditions.wind.speedKts : airport.weather.report.forecast.conditions[0].wind.speedKts} kts</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p>Wind Direction: </p>
                            <p>{airport.weather.report.conditions ? airport.weather.report.conditions.wind.direction : airport.weather.report.forecast.conditions[0].wind.direction}&deg;</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p>Cloud Coverage: </p>
                            <p>{airport.weather.report.conditions ? airport.weather.report.conditions.cloudLayers[0].coverage : airport.weather.report.forecast.conditions[0].cloudLayers[0].coverage}</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p>Visibility: </p>
                            <p>{airport.weather.report.conditions ? airport.weather.report.conditions.visibility.distanceSm : airport.weather.report.forecast.conditions[0].visibility.distanceSm} SM</p>
                        </div>
                    </div>
                    <div>
                        <h2 className=' text-2xl'>Runways Available</h2>
                        <div className=' text-base pt-4'>
                            {airport.info.runways.map((x) => (
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={['fas', 'road']} /><p className='ml-2'> {x.ident}</p>
                                </div>
                            ))}
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        ))}

        </div>
    )
}

export default Card
