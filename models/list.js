const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
    }],
  },
  { timestamps: true },
)

module.exports = mongoose.model("List", listSchema)