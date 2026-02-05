const jwt = require("jsonwebtoken");

const authArtist = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode.role !== "artist") {
      return res.status(403).json({ message: "you don't have acccess" });
    }
    req.user=decode  ///create new property value set decode
    next();
  } catch (error) {
    console.log("while getting eroor in auth middleware", error);
    return res.status(500).json({
      message: "unauthorized",
    });
  }
};

module.exports = { authArtist };
