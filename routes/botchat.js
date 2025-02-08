const express = require("express");
const { getBotResponse, getBotHistory } = require("../controllers/botchat");
const router = express.Router();

router.post("/", getBotResponse);
router.get("/", getBotHistory);

module.exports = router;
