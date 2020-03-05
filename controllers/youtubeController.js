const axios = require('axios')

class YoutubeController {

  static search(req, res, next) {
    console.log(req.body);
    let query = req.body.query
    console.log(query);
    axios({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=5&order=viewCount`,
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${process.env.YOUTUBE_ACCESS_TOKEN}`
      }
    })

      .then(response => {
        let youtubeVideos = response.data.items.map(el => el = el.id)
        res.status(200).json(youtubeVideos)
      })

      .catch(err => {
        console.log(err);
        next(err)
      })
  }

}

module.exports = YoutubeController