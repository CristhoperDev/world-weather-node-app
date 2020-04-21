const axios = require('axios');

const getCityLatLng = async (cityParam) => {
    const encodedParam = encodeURI(cityParam);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedParam}`,
        headers: {'x-rapidapi-key': 'd788e9b640msh555fb6f76e584ebp1a0e9ejsn1502b398340a'}
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No results for ${cityParam}`);
    }

    const data = response.data.Results[0];
    const city = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        city,
        lat,
        lng
    }
}

module.exports = {
    getCityLatLng
};
