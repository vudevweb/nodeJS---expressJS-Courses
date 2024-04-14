const newsRouter = require('./news.routes')
const siteRouter = require('./site.routes')
const coursesRouter = require('./courses.routes')
const meRoutes = require('./me.routes')
function route(app) {

    app.use('/me', meRoutes)
    app.use('/courses', coursesRouter)
    app.use('/news', newsRouter)
    app.use('/', siteRouter)

}

module.exports = route;