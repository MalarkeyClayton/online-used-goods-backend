const { STRIPE_SECRET_KEY } = require("../config/constants");
const Payment = require("../models/Payment");
const stripe = require("stripe")(STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ["card"],
    });

    console.log(paymentIntent);
    Payment.create({
      userId: req.user.id,
      amount,
      currency,
      paymentIntentId: paymentIntent.id,
      status: "Pending",
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
