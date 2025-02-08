const { seedCategory } = require("./Category");
const { seedProduct } = require("./Product");
const { seedUser } = require("./User");
const { seedAddress } = require("./Address");
const { seedCart } = require("./Cart");
const { seedOrder } = require("./Order");
const connectToDB = require("../db/index");
const { default: mongoose } = require("mongoose");

const seedData = async () => {
  try {
    await connectToDB();
    console.log("Seed [started] please wait..");
    await seedCategory();
    await seedProduct();
    await seedUser();
    await seedAddress();
    await seedCart();
    await seedOrder();

    console.log("Seed completed..");
  } catch (error) {
    console.log(error);
  } finally {
    // Ensure the connection is closed
    await mongoose.connection.close();

    // Exit the process
    // eslint-disable-next-line no-undef
    process.exit(0);
  }
};

seedData();
