const express = require("express");
const musicController = require("../controllers/music.controller.js");
const multerFile = require("../middlewares/multer.js");
const router = express.Router();

router.post("/upload", multerFile.single("music"), musicController.createMusic);

module.exports = router;
