import db from "./connection.js";

// const costlyIceCreams = await db.types.find({ price: { $gt: 20 }}).toArray();
const allIceCreams = await db.types.find().toArray();
console.log(allIceCreams);

// const firstIceCreamBrand = await db.brands.findOne();
// console.log(firstIceCreamBrand);
