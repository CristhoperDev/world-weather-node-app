const argv = require('./config/yargs').argv;

const place = require('./place/place')

place.getCityLatLng(argv.city)
    .then(response => console.log(response))
