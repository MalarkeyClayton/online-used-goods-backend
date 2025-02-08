const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", title: "smartphones" },
  { _id: "65a7e24602e12c44f599442d", title: "laptops" },
  { _id: "65a7e24602e12c44f599442e", title: "fragrances" },
  { _id: "65a7e24602e12c44f599442f", title: "skincare" },
  { _id: "65a7e24602e12c44f5994430", title: "groceries" },
  { _id: "65a7e24602e12c44f5994431", title: "home-decoration" },
  { _id: "65a7e24602e12c44f5994432", title: "furniture" },
  { _id: "65a7e24602e12c44f5994433", title: "tops" },
  { _id: "65a7e24602e12c44f5994434", title: "womens-dresses" },
  { _id: "65a7e24602e12c44f5994435", title: "womens-shoes" },
  { _id: "65a7e24602e12c44f5994436", title: "mens-shirts" },
  { _id: "65a7e24602e12c44f5994437", title: "mens-shoes" },
  { _id: "65a7e24602e12c44f5994438", title: "mens-watches" },
  { _id: "65a7e24602e12c44f5994439", title: "womens-watches" },
  { _id: "65a7e24602e12c44f599443a", title: "womens-bags" },
  { _id: "65a7e24602e12c44f599443b", title: "womens-jewellery" },
  { _id: "65a7e24602e12c44f599443c", title: "sunglasses" },
  { _id: "65a7e24602e12c44f599443d", title: "automotive" },
  { _id: "65a7e24602e12c44f599443e", title: "motorcycle" },
  { _id: "65a7e24602e12c44f599443f", title: "lighting" },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
