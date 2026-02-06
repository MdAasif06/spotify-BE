const express = require("express");
const musicController = require("../controllers/music.controller.js");
const multerFile = require("../middlewares/multer.js");
const router = express.Router();
const albumController = require("../controllers/album.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

router.post(
  "/upload",
  authMiddleware.authArtist,
  multerFile.single("music"),
  musicController.createMusic,
);
router.post("/album", authMiddleware.authArtist, albumController.createAlbum);
router.get("/musics", authMiddleware.authUser, musicController.getAllMusic);
router.get("/albums", authMiddleware.authUser, albumController.getAllAlbum);
router.get("/albums/:albumId",authMiddleware.authUser,albumController.getAlbumById)

module.exports = router;
