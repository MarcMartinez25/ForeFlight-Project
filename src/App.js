// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from './assets/plane.svg'
import NavBar from "./Components/NavBar";
// import Card from './Components/Card'

function App() {
    // 

    return (
        <div className='container mx-auto my-4'>
            <NavBar />

            <div className='flex flex-grow justify-center my-8'>
                <div>
                    <input type='text' placeholder='Enter ICAO Codes' className='border-4 rounded-lg p-4 mr-4 border-blue-700 focus:border-blue-500 text-black'></input>
                    <button className='border-4 rounded-lg p-4 border-blue-700 bg-blue-700 text-white hover:border-blue-500 hover:bg-blue-500'>Search</button>
                </div>
            </div>

            <div className='flex flex-grow justify-center mt-24'>
                <img src={Img} alt='not a plane' className=' w-1/3'></img>
            </div>
            {/* <Card /> */}
        </div>
    );
}

export default App;
