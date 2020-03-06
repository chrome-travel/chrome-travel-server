const axios = require('axios');

function getTop5Hotel(city) {
    let query = city || '';
    return axios({
        "method": "GET",
        "url": "https://tripadvisor1.p.rapidapi.com/locations/search",
        "headers": {
            "x-rapidapi-host": process.env.TA_HOST,
            "x-rapidapi-key": process.env.TA_KEY
        },
        "params": {
            query
        }
    })
        .then(response => {
            let locId = response.data.data[0].result_object.location_id;
            return axios({
                "method": "GET",
                "url": "https://tripadvisor1.p.rapidapi.com/hotels/list",
                "headers": {
                    "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                    "x-rapidapi-key": "4a003621a5msh52f32a49632069bp1c8464jsn6d981b16e394"
                },
                "params": {
                    "limit": "5",
                    "order": "asc",
                    "sort": "recommended",
                    "location_id": locId,
                }
            })
        })
}

module.exports = getTop5Hotel;
