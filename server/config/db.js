const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected host: ${connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
