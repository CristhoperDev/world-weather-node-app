const argv = require('./config/yargs').argv;

const place = require('./place/place')
const weather = require('./weather/weather')

/*place.getCityLatLng(argv.city)
    .then(response => console.log(response))*/

/*weather.getWeather(-11.900000, -76.449997)
    .then(response => console.log(response))
    .catch(err => console.error(err));*/


const getInfo = async (city) => {
    try {
        const coords = await place.getCityLatLng(city);
        const temp = await weather.getWeather(coords.lat, coords.lng)

        return `The weather of ${coords.city} is ${temp}.`;
    } catch (e) {
        return `${city} weather could not be determined.`;
    }
}

getInfo(argv.city)
    .then(console.log)
    .catch(console.log);
