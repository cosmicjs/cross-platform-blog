// blog.js
import Cosmic from 'cosmicjs'
module.exports = (app, config, partials) => {
  app.get('/', (req, res) => {
    Cosmic.getObjects(config.cosmicjs, (err, response) => {
      res.locals.cosmic = response
      const posts = response.objects.type.posts
      res.locals.posts = posts
      posts.forEach((blog, i) => {
        posts[i].timestamp = new Date(blog.created).getTime()
      })
      return res.render('blog.html', {
        partials
      })
    })
  })
  app.get('/blog/:slug', (req, res) => {
    const slug = req.params.slug
    Cosmic.getObjects(config.cosmicjs, (err, response) => {
      res.locals.cosmic = response
      const posts = response.objects.type.posts
      posts.forEach(page => {
        if (page.slug === slug)
          res.locals.page = page
      })
      res.locals.page.timestamp = new Date(res.locals.page.created).getTime()
      if (!res.locals.page) {
        return res.status(404).render('404.html', {
          partials
        })  
      }
      return res.render('blog-single.html', {
        partials
      })
    })
  })
}
