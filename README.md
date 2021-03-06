# ForeFlight Interview

The ForeFlight development team would like to get a better picture of your coding and problem solving skills. Please build a program that implements the specification below. Some guidelines to keep in mind:

-   You may use any open source / public libraries that you like.
-   Your future peers will be reviewing your submission so write it appropriately.

## Specification

### Input:

-   One or more airport identifiers: `kaus`, `50r`, `egll`, `khou` .

### Output:

A web page with the following:

-   The airport identifier (icao)
-   The airport name
-   The available runways
-   The lat/long of the airport
-   A current weather report that contains the following
    -   Temp (F)
    -   Relative humidity (%)
    -   Summary of cloud coverage (text string)
        -   This is the greatest amount of coverage listed if any
    -   Visibility (Statute Miles)
    -   Wind Speed (MPH)
    -   Wind Direction (cardinal directions to secondary-intercardinal precision)

#### Data Sources

The data sources for this exercise can be accessed while the development server is running.

-   `Airport` data can be obtained at: http://localhost:3000/airports/<airport_identifier>.json .
    -   Ex. http://localhost:3000/airports/kaus.json
-   `Weather Conditions` can be obtained at: http://localhost:3000/weather/<airport_identifier>.json
    -   Ex. http://localhost:3000/weather/kaus.json

## Summary

In total I have spent around 12 hours working on this project. I really enjoyed working on this project, it was really similar to a project I have done in Vue.js titled [Metar-App](https://metar-data.vercel.app/) which pulls real-time metar info from an API.

There is more work that can be done with this project. It can use better error handling, it currently doesn't like when you enter multiple icao codes, and the card.js file could also be cleaned up a bit. In the future, I would also like to do more styling and and more functionality like removing airports and ability to get info for all airport using an API that I have used before.

### What I used to build this project

-   Deployed using [Vercel](https://vercel.com/)
-   [TailwindCSS](https://tailwindcss.com/) for the design
-   [Axios](https://axios-http.com/docs/intro) to handle api calls
-   [FontAwesome](https://fontawesome.com/) for the cool Icons
-   [undraw.io](https://undraw.co/illustrations) for the cool graphics

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
