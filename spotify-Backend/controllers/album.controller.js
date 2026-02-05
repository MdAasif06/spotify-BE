const albumModel = require("../models/album.model.js");

const createAlbum = async (req, res) => {
  try {
    /* const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (decode.role !== "artist") {
      return res.status(403).json({
        message: "you don't have acccess to create an anlbum",
      });
    }*/
    const { title, musics } = req.body;
    if (!title || !musics) {
      return res.status(401).json({ message: "all filed are required" });
    }
    const album = await albumModel.create({
      title,
      artist: req.user.user,
      musics: musics,
    });
    res.status(201).json({
      message: "album created successfully",
      album: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        musics: album.musics,
      },
    });
  } catch (error) {
    console.log("while created album error", error);
    return res.status(500).json({
      message: "Internal server error in album created",
    });
  }
};

const getAllAlbum = async (req, res) => {
  try {
    const albums = await albumModel
      .find()
      .populate("artist", "username")
      .populate("musics"); //populate given all details of artist
    res.status(200).json({
      message: "albums fetch successfully",
      musics: albums,
    });
  } catch (error) {
    console.log("fetching album error", error);
    return res.status(500).josn({
      message: "unauthorized",
    });
  }
};

module.exports = { createAlbum, getAllAlbum };
