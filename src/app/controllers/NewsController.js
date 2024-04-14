
class NewsController {

    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('adu')
        res.render('news')
    }
}

module.exports = new NewsController;