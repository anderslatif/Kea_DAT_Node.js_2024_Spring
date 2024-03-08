import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage);

const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = renderPage(matches, {
    tabTitle: "DogInder Match",
    CSSLinks: '<link rel="stylesheet" href="/pages/matches/matches.css">'
});

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = renderPage(contact, {
    tabTitle: "DogInder Contact"
});

