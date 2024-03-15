import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(page, config={}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    return header.replace("$TAB_TITLE$", config.tabTitle ?? "DogInder")
                .replace("$CSS_LINKS$", config.CSSLinks ?? "")
     + page 
     + footer;
}

