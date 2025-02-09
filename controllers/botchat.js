
const {HfInference} = require("huggingface/inference");

const getBotResponse = async (req, res) => {
    const client = new HfInference("hf_aJWzGpJMBzZgXdwDEsrIRCjnmfciNbtzU");

    try {
      const chatCompletion = await client.chatCompletion({
        model: "meta-llama/Llama-2-7b-chat-hf",
        messages: [
          {
            role: "user",
            content: req.body.message,
          },
        ],
        provider: "together",
        max_tokens: 500,
      });
      res.send({message: chatCompletion.choices[0].message.content});
    } catch (error) {
      res.status(500).send({error: error.message});
    }
};

module.exports = {
    getBotResponse,
};