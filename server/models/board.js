const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
    }],
  },
  { timestamps: true },
)
module.exports = mongoose.model("Board", boardSchema)