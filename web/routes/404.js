// 404
import Cosmic from 'cosmicjs'
module.exports = (app, config, partials) => {
  // 404
  app.get('/:slug', (req, res) => {
    Cosmic.getObjects(config.cosmicjs.bucket, (err, response) => {
      res.locals.cosmic = response
      res.error('404.html')
    })
  })
}