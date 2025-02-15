const getBotResponse = async (req, res) => {
  console.log(req.body);
  res.send({ message: "Hello" });
};

module.exports = {
  getBotResponse,
};
