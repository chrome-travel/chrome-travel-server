const axios = require('axios');
const zomatoLink = "https://developers.zomato.com/api/v2.1/";
const convertToQueryString = require('../helpers/convertSpace');

const zomato = axios.create({
    baseURL: zomatoLink,
    headers: { 'user-key': process.env.ZOMATO }
});

class Controller {
    static getResto(city) {
        let qs = convertToQueryString(city)
        return zomato.get(`locations?query=${qs}`)
        .then((result) => {
            let cityId = result.data.location_suggestions[0].city_id;
            return zomato.get(`search?entity_id=${cityId}&entity_type=city&count=5&sort=rating&order=desc`)
        }).catch((err) => {
            throw err;
        });
    }
}

module.exports = Controller;
