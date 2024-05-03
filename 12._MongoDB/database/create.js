import db from "./connection.js";

const result = await db.types.insertOne({ type: "ice cream sandwich" });

console.log(result);
