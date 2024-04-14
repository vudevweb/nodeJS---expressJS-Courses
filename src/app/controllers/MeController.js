const coursesModel = require("../models/CourseModel");

class MeController {
    index(req, res, next) {
        coursesModel.find({}).lean()
            .then((courses) => {
                res.send(courses)
            })
            .catch(next);
    }

    courses(req, res, next) {
        coursesModel.find({}).lean()
            .then((courses) => {
                res.render("courses/stored-couses", {
                    title: "Danh sách khóa học",
                    courses: courses,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();