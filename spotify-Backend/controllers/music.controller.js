const musicModel = require("../models/music.model.js");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../services/storage.service.js");

//create music file
const createMusic = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("DECODE =>", decode);


    if (decode.role !== "artist") {
      return res
        .status(403)
        .json({ message: "you don't have access to create a music" });
    }
    const { title } = req.body;
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "Music file required" });
    }

    const result = await uploadFile(file);
    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: decode.user,
    });
    res.status(200).json({
      message: "music created successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (error) {
    console.log("while creating music", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { createMusic };
