const { default: mongoose } = require("mongoose");

const botchatSchema = new mongoose.Schema({
  userMsg: {
    type: String,
    required: true,
  },
  botRes: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Botchat", botchatSchema);
