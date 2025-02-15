const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["admin", 'seller', "user"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    avatar: {
      type: String,
      default: "/avatar/default-avatar.svg",
    },
    country: {
      type: String,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    phone: {
      type: String,
      require: true
    },
    skypeId: {
      type: String,
    },
    telegramId: {
      type: String,
    },
    discordId: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("User", userSchema);
