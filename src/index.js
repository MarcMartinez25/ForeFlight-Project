import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faCloud, faCompass, faMapMarkedAlt, faMoon, faRoad, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faMapMarkedAlt, faCompass, faSun, faMoon, faCloud, faClock, faRoad)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
