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
