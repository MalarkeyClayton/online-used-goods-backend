const {seedBrand}=require("./Brand")
const {seedCategory}=require("./Category")
const {seedProduct}=require("./Product")
const {seedUser}=require("./User")
const {seedAddress}=require("./Address")
const {seedCart}=require("./Cart")
const {seedOrder}=require("./Order")
const connectToDB=require("../db")

const seedData=async()=>{
    try {
        await connectToDB()
        console.log('Seed [started] please wait..');
        await seedBrand()
        await seedCategory()
        await seedProduct()
        await seedUser()
        await seedAddress()
        await seedCart()
        await seedOrder()

        console.log('Seed completed..');
    } catch (error) {
        console.log(error);
    }
}

seedData()