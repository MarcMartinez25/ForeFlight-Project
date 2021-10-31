import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
    return (
        <div className='mb-12'>
            <div className='flex bg-blue-700 text-white rounded-md p-4 items-center'>
                <p className='flex-grow-0 text-lg'>ForeFlight Web Project</p>
                <div className='flex-grow'></div>
                <div className='flex-grow-0'><a href="https://github.com/MarcMartinez25" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></a></div>
            </div>
        </div>
    )
}

export default NavBar
