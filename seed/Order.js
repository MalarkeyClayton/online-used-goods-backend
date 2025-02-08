const Order = require("../models/Order");

const orders = [
  {
    _id: "65c2658db53f820728d0745a",
    userId: "65b8e564ea5ce114184ccb96",
    item: [
      {
        userId: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599444e",
          userId: "65b8e564ea5ce114184ccb96",
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discount: 12.96,
          categoryId: "65a7e24602e12c44f599442c",
          images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
          ],
          updatedAt: "2024-02-07T09:22:57.840Z",
        },
        quantity: 1,
        _id: "65c26581b53f820728d07456",
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        userId: "65b8e564ea5ce114184ccb96",
        address: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phone: "9452571272",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "CARD",
    total: 1509.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c265c6b53f820728d0749c",
    userId: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c265a2b53f820728d07474",
        userId: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599444f",
          userId: "65b8e564ea5ce114184ccb96",
          title: "Fog Scent Xpressio Perfume custom",
          description:
            "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
          price: 13,
          discount: 8.14,
          categoryId: "65a7e24602e12c44f599442e",
          images: [
            "https://cdn.dummyjson.com/product-images/13/1.jpg",
            "https://cdn.dummyjson.com/product-images/13/2.png",
            "https://cdn.dummyjson.com/product-images/13/3.jpg",
            "https://cdn.dummyjson.com/product-images/13/4.jpg",
          ],
          updatedAt: "2024-02-07T09:22:57.840Z",
        },
        quantity: 2,
      },
      {
        _id: "65c265b9b53f820728d0748f",
        userId: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599444f",
          userId: "65b8e564ea5ce114184ccb96",
          title: "Fog Scent Xpressio Perfume custom",
          description:
            "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
          price: 13,
          discount: 8.14,
          categoryId: "65a7e24602e12c44f599442e",
          images: [
            "https://cdn.dummyjson.com/product-images/13/1.jpg",
            "https://cdn.dummyjson.com/product-images/13/2.png",
            "https://cdn.dummyjson.com/product-images/13/3.jpg",
            "https://cdn.dummyjson.com/product-images/13/4.jpg",
          ],
          updatedAt: "2024-02-07T09:22:57.840Z",
        },
        quantity: 3,
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        userId: "65b8e564ea5ce114184ccb96",
        address: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phone: "9452571272",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 84.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
];

exports.seedOrder = async () => {
  try {
    await Order.insertMany(orders);
    console.log("Order seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
