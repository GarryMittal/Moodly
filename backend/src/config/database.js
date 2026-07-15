const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);

    process.exit(1);
  }
};

module.exports = connectToDB;
