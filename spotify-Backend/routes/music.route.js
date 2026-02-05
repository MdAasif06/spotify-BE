const express = require("express");
const musicController = require("../controllers/music.controller.js");
const multerFile = require("../middlewares/multer.js");
const router = express.Router();
const albumController = require("../controllers/album.controller.js");
const authMiddleware=require("../middlewares/auth.middleware.js")


router.post("/upload",authMiddleware.authArtist, multerFile.single("music"), musicController.createMusic);
router.post("/album",authMiddleware.authArtist, albumController.createAlbum);

module.exports = router;
