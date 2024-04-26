import db from "./connectMySQL.js";

const [rows, fields] = await db.query(`SELECT * FROM customers LIMIT 5;`);

console.log(rows);
