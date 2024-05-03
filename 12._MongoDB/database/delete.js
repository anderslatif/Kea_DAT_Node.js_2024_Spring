import db from "./connection.js";

const result = await db.types.deleteMany({ name: "Osvald" });
console.log(result);