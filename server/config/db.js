require("dotenv").config();

const mongoose = require("mongoose");

// connect to mongoose
mongoose.connect(
  "mongodb://localhost/dora-development", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }, (err) => {
    if (err) throw err;
    console.log("mongodb connected!")
  }
);

module.exports = mongoose;
