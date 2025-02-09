const axios = require("axios");
const Botchat = require("../models/Botchat");

// eslint-disable-next-line no-undef
const LLAMA_API_KEY = `Bearer ${process.env.LLAMA_API_KEY}`;
const LLAMA_API_URL = "https://api-inference.huggingface.co/models/roberta-base";

exports.getBotResponse = async (req, res) => {
  const { message } = req.body;
  try {
    console.log(LLAMA_API_KEY, { message });
    const response = await axios.post(
      LLAMA_API_URL,
      {
        inputs: message,
      },
      {
        headers: {
          Authorization: LLAMA_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    res.json({ response: response.data });
  } catch (error) {
    console.error(
      "Llama Error:",
      error.response ? error.response.data : error.message
    );
    res.status(400).json({
      error: error.response ? error.response.data : "An error occurred",
    });
  }
};

exports.getBotHistory = async (req, res) => {
  try {
    const botchats = await Botchat.find({});
    res.status(200).json(botchats);
  } catch (error) {
    console.log("Error fetching botchats:", error);
    res.status(500).json({ error: "Error fetching botchats" });
  }
};
