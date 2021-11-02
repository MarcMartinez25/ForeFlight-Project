// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import axios from "axios";
import Img from './assets/plane.svg'
import NavBar from "./Components/NavBar";
import Card from './Components/Card'

function App() {
    const [showIcon, setShowIcon] = useState(true)
    const [icaoCodes, setIcaoCodes] = useState('')
    const [airports, setAirports] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const codes = icaoCodes.split(' ')

        codes.forEach((x) => {
            const goodAirports = ['50r', 'egll', 'kaus', 'khou']

            if (goodAirports.includes(x)) {

                const infoUrl = 'https://fore-flight-project.vercel.app/airports/' + x + '.json' // for dev: 'http://localhost:3000/airports/' + x + '.json'
                const weatherUrl = 'https://fore-flight-project.vercel.app/' + x + '.json'  // for dev: 'http://localhost:3000/weather/' + x + '.json'
                let info = { info: null, weather: null }

                axios.all([
                    axios.get(infoUrl),
                    axios.get(weatherUrl)
                ])
                    .then(axios.spread((infoRes, weatherRes) => {
                        info.info = infoRes.data
                        info.weather = weatherRes.data

                        setAirports([...airports, info])
                    }))

            } else {
                alert('Unable to find airport')
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
