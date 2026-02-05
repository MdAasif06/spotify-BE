const ImageKit = require("@imagekit/nodejs/index.js");
const dotenv = require("dotenv");
dotenv.config();
const imageKit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
});

const uploadFile = async (file) => {
  if (!file.buffer) {
    throw new Error("Buffer missing in uploadFile()");
  }
  const response = await imageKit.files.upload({
    file: file.buffer.toString("base64"),
    fileName: `music_${Date.now()}.mp3`,
    folder: "BE/music",
  });
  return response;
};

module.exports = { uploadFile };
