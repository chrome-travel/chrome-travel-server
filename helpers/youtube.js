const axios = require('axios')

function search(city) {
  let query = city + " wisata";

  return axios({
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=5&order=viewCount`,
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${process.env.YOUTUBE_ACCESS_TOKEN}`
    }
  })
}

module.exports = search