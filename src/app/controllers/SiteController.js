const CourseModel = require('../models/CourseModel');

class SiteController {

    index(req, res, next) {
        CourseModel.find({}).lean()
            .then(CourseModel => res.render('home', {
                title: 'Trang chủ',
                courses: CourseModel
            }))
            .catch(next)
    }

    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
