const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/stored/trash-courses", meController.trashCourses);
router.get("/stored/courses", meController.courses);
router.get("/", meController.index);

module.exports = router;
