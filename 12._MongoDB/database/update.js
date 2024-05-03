import db from "./connection.js";

const result = await db.brands.updateOne({ company: "Nestle"}, { $set: { isCancelled: true } });
console.log(result);
