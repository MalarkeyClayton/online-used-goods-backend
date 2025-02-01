require("dotenv").config();
const mongoose = require("mongoose");

exports.connectToDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};
