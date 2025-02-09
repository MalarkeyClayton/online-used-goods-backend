/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  LLAMA_API_KEY: `Bearer ${process.env.LLAMA_API_KEY}`,
  LLAMA_API_URL: "https://api-inference.huggingface.co/models/roberta-base",
};
