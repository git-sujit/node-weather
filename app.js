const request = require('request')
const chalk = require('chalk')
const url = "http://api.weatherstack.com/current?access_key=1b16c14045377d19132f4b62d1297d1a&query=37.8267,-122.4233"

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(chalk.magenta.bold.inverse("Weather Data"))
    console.log(data)
    console.log(chalk.magenta.bold.inverse("Current Location"))
    console.log(data.location)
    console.log(chalk.magenta.bold.inverse("Current Weather Data"))
    console.log(data.current)
})
