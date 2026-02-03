const mongoose = require("mongoose");

const connecDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connect");
  } catch (error) {
    console.log("database connection error", error);
  }
};
module.exports = connecDb;
