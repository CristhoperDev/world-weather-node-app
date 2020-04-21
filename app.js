const argv = require('./config/yargs').argv;

const place = require('./place/place')
const weather = require('./weather/weather')

/*place.getCityLatLng(argv.city)
    .then(response => console.log(response))*/

weather.getWeather(-11.900000, -76.449997)
    .then(response => console.log(response))
    .catch(err => console.error(err));
