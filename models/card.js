const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  },
  { timestamps: true },
)
module.exports = mongoose.model("Card", cardSchema)