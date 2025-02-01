const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const testRoutes = require("./routes/test");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/test", testRoutes);
app.use("/api/auth", authRoutes);

// Connect to MongoDB
// eslint-disable-next-line no-undef
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // eslint-disable-next-line no-undef
  .then(() =>
    app.listen(process.env.PORT || 8001, () =>
      console.log("Server running on port 8001!")
    )
  )
  .catch((err) => console.log(err));
