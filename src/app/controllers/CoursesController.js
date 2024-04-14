const CourseModel = require("../models/CourseModel");

class CoursesController {
    index(req, res, next) {
        CourseModel.find({})
            .lean()
            .then((CourseModel) =>
                res.render("courses/courses", {
                    title: "Khóa học",
                    courses: CourseModel,
                })
            )
            .catch(next);
    }

    show(req, res, next) {
        CourseModel.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render("courses/show", {
                    title: course.name,
                    courseDetail: course,
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render("courses/create", {
            title: "Tạo khóa học",
        });
    }

    store(req, res, next) {
        var formData = req.body;
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/${req.body.image}`;
        const course = new CourseModel(formData);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => {
                res.status(500).send("Error saving course");
            });
    }

    edit(req, res, next) {
        CourseModel.findById(req.params.id).lean()
            .then(courses => res.render('courses/update', {
                title: "Sửa khóa học",
                courses: courses
            }))
            .catch(next)
    }

    update(req, res, next) {
        var formData = req.body;
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/${req.body.image}`;
        CourseModel.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => {
                res.status(500).send("Error saving course");
            });
    }

    restore(req, res, next) {
        CourseModel.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch((err) => {
                res.status(500).send("Error saving course");
            });
    }

    delete(req, res, next) {
        CourseModel.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch((err) => {
                res.status(500).send("Error saving course");
            });
    }

    forceDelete(req, res, next) {
        CourseModel.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch((err) => {
                res.status(500).send("Error saving course");
            });
    }
}

module.exports = new CoursesController();
