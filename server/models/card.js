const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
  },
  { timestamps: true },
)
module.exports = mongoose.model("Card", cardSchema)