import bcrypt from "bcrypt";

const saltRounds = 14;
const plaintextPassword = "Hunter123";
const passwordHash = "$2b$14$0lPQTl8OvU/PEoUkxfH9M./lv..pm24PrPZm/uiGIkaCcOTqYOdXi";

// /signup /forgotpassword
const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);

console.log(hashedPassword);

// /login
const isSame = await bcrypt.compare(plaintextPassword, passwordHash);

console.log(isSame);

