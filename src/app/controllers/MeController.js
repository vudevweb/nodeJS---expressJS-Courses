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
        let coursesQuery = coursesModel.find({}).lean()
        Promise.all([coursesQuery, coursesModel.countDocumentsWithDeleted({ deleted:true })])
            .then(([courses, deletedCount]) => {
                console.log(deletedCount)
                res.render("courses/stored-courses", {
                    title: "Danh sách khóa học",
                    courses: courses,
                    deletedCount:deletedCount
                });
            })
            .catch(next);
        }

    trashCourses(req, res, next) {
        coursesModel.findWithDeleted({ deleted: true }).lean()
            .then((courses) => {
                res.render("courses/trash-courses", {
                    title: "Khóa học đã xóa",
                    courses: courses,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();