import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

const header = fs.readFileSync("./public/components/header/header.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(page) {
    return header + page + footer;
}