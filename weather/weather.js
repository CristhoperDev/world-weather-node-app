const axios = require('axios');

const getWeather = async (lat, lng) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=471e586f997a4eff0d94c64d1aab9db9&units=metric`)

    return response.data.main.temp;
}

module.exports = {
    getWeather
};
