// Config
module.exports = (app, config, partials) => {
  require('./blog')(app, config, partials)
  require('./404')(app, config, partials)
}