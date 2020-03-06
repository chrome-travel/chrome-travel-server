const axios = require('axios');
const zomatoLink = "https://developers.zomato.com/api/v2.1/";
const convertToQueryString = require('./convertSpace');

const zomato = axios.create({
    baseURL: zomatoLink,
    headers: { 'user-key': process.env.ZOMATO }
});


function getResto(city) {
    let qs = convertToQueryString(city)
    return zomato.get(`locations?query=${qs}`)
        .then((result) => {
            let cityId = result.data.location_suggestions[0].city_id;
            return zomato.get(`search?entity_id=${cityId}&entity_type=city&count=5&sort=rating&order=desc`)
        }).catch((err) => {
            throw err;
        });
}


module.exports = getResto;
